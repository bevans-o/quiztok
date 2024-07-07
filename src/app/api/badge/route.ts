import { database as db } from "@/app/firebaseConfig";
import { Badge } from "@/app/lib/badge";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const ref = doc(db, `badges/${id}`);
  getDoc(ref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const badge = snapshot.data() as Badge;
        return Response.json(badge);
      } else {
        console.log(`Badge '${id}' does not exist.`);
        return new Response(`Badge '${id}' does not exist.`, {
          status: 404,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      return new Response(error, {
        status: 500,
      });
    });

  return new Response(`Badge '${id}' does not exist.`, {
    status: 404,
  });
}

export async function POST(request: Request) {
  const badge = (await request.json()) as Badge;
  if (!badge.id) {
    const snapshot = await addDoc(collection(db, "badges"), badge);
    const updateRef = doc(db, "badges", snapshot.id);
    await updateDoc(updateRef, { id: snapshot.id });

    return Response.json({ id: snapshot.id });
  } else {
    const updateRef = doc(db, "activities", badge.id);
    await updateDoc(updateRef, badge);

    return Response.json({ id: badge.id });
  }
}
