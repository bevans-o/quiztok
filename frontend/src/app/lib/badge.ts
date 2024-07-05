export type Colour = "red" | "rose" | "blue" | "green" | "yellow" | "teal" | "purple";
export type Icon = "star" | "heart" | "flower";

export type Badge = {
  name: string;
  colour: Colour;
  icon: Icon;
};

// MOCK: post
export function postBadge(badge: Badge) {
  console.log(`POST Badge: ${badge.name}`);
  console.log(badge);
}

// MOCK: get all
export function getBadges(user: string | undefined): Badge[] {
  if (!user) return [];
  return [];
}

// MOCK: get one
export function getBadge(id: string): Badge {
  return {
    name: "Badge",
    colour: "red",
    icon: "heart",
  };
}
