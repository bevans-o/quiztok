import { Stream } from "./stream";

// username and badge id
export type badgeOwner = {
  name: string;
  id: string;
};

export async function getUserBadge(stream: Stream) {
  const badge = stream.badge
  if (badge) {
    const sortedUsers: Record<string, number> = Object.fromEntries(
      Object.entries(stream.scores).sort((a, b) => b[1] - a[1])
    );
    let badgeHolders: string[] = [];

    if (badge.condition == "Top Scorer") {
      for (let user in sortedUsers) {
        if (stream.scores[user] < sortedUsers[0].valueOf()) {
          continue
        }
        else if (stream.scores[user] === sortedUsers[0].valueOf()) {
          badgeHolders.push(user);
        }
        else {
          break
        }
      }
      
    }

    else if (badge.condition == "Top Three") {
      let count = 0
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 3) {
          badgeHolders.push(user);
          count += 1
        }
        else {
          break
        }
      }
    }

    else if (badge.condition == "Top Three") {
      let count = 0
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 5) {
          badgeHolders.push(user);
          count += 1
        }
        else {
          break
        }
      }
    }
    return [badgeHolders];
  }
}

export async function assignBadge(badgeOwner: badgeOwner) {
  try {
    const response = await fetch("/api/badge-owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(badgeOwner),
    });
    if (response.ok) {
      console.log(`Badge added to ${badgeOwner.name} posted successfully`);
    } else {
      console.error("Failed to assign badge:", response.statusText);
    }
  } catch (error) {
    console.error("Error assigning badge:", error);
  }
}  
