import { database as db } from "@/app/firebaseConfig";
import { Badge } from "@/app/lib/badge";
import { BadgeOwner } from "@/app/lib/badge-owner";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const badgeOwner = (await request.json()) as BadgeOwner;

  await addDoc(collection(db, "badge-owner"), badgeOwner);

  return Response.json({ id: badgeOwner.id });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");

  const q = query(collection(db, "badge-owner"), where("name", "==", user));

  const docs = (await getDocs(q)).docs;
  const badgeLinks = docs.map((doc) => doc.data()) as BadgeOwner[];

  const badges: Badge[] = [];

  await badgeLinks.forEach(async (link) => {
    const ref = doc(db, `badges/${link.id}`);
    getDoc(ref).then((snapshot) => {
      if (snapshot.exists()) {
        const badge = snapshot.data() as Badge;
        badges.push(badge);
      }
    });
  });

  return Response.json(badges);
}
