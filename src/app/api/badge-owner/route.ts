import { database as db } from "@/app/firebaseConfig";
import { badgeOwner } from "@/app/lib/badge-owner";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  const badgeOwner = (await request.json()) as badgeOwner;
  if (!badgeOwner.id) {
    const snapshot = await addDoc(collection(db, "badge-owner"), badgeOwner);
    const updateRef = doc(db, "badge-owner", snapshot.id);
    await updateDoc(updateRef, { id: snapshot.id });

    return Response.json({ id: snapshot.id });
  } else {
    const updateRef = doc(db, "badge-owner", badgeOwner.id);
    await updateDoc(updateRef, badgeOwner);

    return Response.json({ id: badgeOwner.id });
  }
}
