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

export async function assignBadge(stream: Stream) {
  const badge = stream.badge;
  if (badge) {
    const sortedUsers: Record<string, number> = Object.fromEntries(
      Object.entries(stream.scores).sort((a, b) => b[1] - a[1])
    );
    let badgeHolders: string[] = [];

    if (stream.condition == "Top Scorer") {
      for (let user in sortedUsers) {
        if (stream.scores[user] < sortedUsers[0].valueOf()) {
          continue;
        } else if (stream.scores[user] === sortedUsers[0].valueOf()) {
          badgeHolders.push(user);
        } else {
          break;
        }
      }
    } else if (stream.condition == "Top Three") {
      let count = 0;
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 3) {
          badgeHolders.push(user);
          count += 1;
        } else {
          break;
        }
      }
    } else if (stream.condition == "Top Five") {
      let count = 0;
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 5) {
          badgeHolders.push(user);
          count += 1;
        } else {
          break;
        }
      }
    }
  }
}
