import { Badge } from "./badge";
import { Stream } from "./stream";

// username and badge id
export type BadgeOwner = {
  name: string;
  id: string;
};

export async function assignBadge(badgeOwner: BadgeOwner) {
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

export async function getUserBadges(user: string): Promise<Badge[]> {
  try {
    const response = await fetch(`/api/badge-owner?user=${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const badges = await response.json();
      console.log(badges);
      return badges as Badge[];
    } else {
      console.error("Failed to get badges: ", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error getting badges: ", error);
  }

  return [];
}
