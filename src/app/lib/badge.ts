import { Stream } from "./stream";

export type Colour = "red" | "rose" | "blue" | "green" | "yellow" | "teal" | "purple";
export type Icon = "star" | "heart" | "flower";

export type Badge = {
  author: string;
  name: string;
  id: string;
  colour: Colour;
  icon: Icon;
};

export async function getBadges(author?: string): Promise<Badge[]> {
  try {
    const response = await fetch(`/api/badges${author ? `?author=${author}` : ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const badges = await response.json();

      return badges;
    } else {
      console.error("Failed to get badges: ", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error getting badges: ", error);
  }

  return [];
}

export async function getBadge(id: string): Promise<Badge | null> {
  try {
    const response = await fetch(`/api/badge?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const badge = (await response.json()) as Badge;
      return badge;
    } else {
      console.error("Failed to get badge: ", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error getting badge: ", error);
  }

  return null;
}

export async function postBadge(badge: Badge) {
  try {
    const response = await fetch("/api/badge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(badge),
    });
    if (response.ok) {
      console.log(`Badge ${badge.name} posted successfully`);
    } else {
      console.error("Failed to post badge:", response.statusText);
    }
  } catch (error) {
    console.error("Error posting badge:", error);
  }
}

export function getBadgeWinners(stream: Stream) {
  const badge = stream.badge;
  if (badge) {
    const keys = Object.keys(stream.scores);
    const sortedUsers = keys
      .map((key) => {
        return { name: key, score: stream.scores[key] };
      })
      .sort((a, b) => b.score - a.score);

    if (sortedUsers.length < 1) return [];

    let badgeHolders: string[] = [];

    if (stream.condition === "Top Scorer") {
      for (const user of sortedUsers) {
        if (user.score < sortedUsers[0].score) {
          continue;
        } else if (user.score === sortedUsers[0].score) {
          badgeHolders.push(user.name);
        } else {
          break;
        }
      }
    } else if (stream.condition === "Top Three") {
      let count = 0;
      for (const user of sortedUsers) {
        if (user.score < sortedUsers[0].score && count < 3) {
          badgeHolders.push(user.name);
          count += 1;
        } else {
          break;
        }
      }
    } else if (stream.condition === "Top Five") {
      let count = 0;
      for (const user of sortedUsers) {
        if (user.score < sortedUsers[0].score && count < 5) {
          badgeHolders.push(user.name);
          count += 1;
        } else {
          break;
        }
      }
    }
    return badgeHolders;
  }

  return [];
}
