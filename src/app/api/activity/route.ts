import { database as db } from "@/app/firebaseConfig";
import { Activity } from "@/app/lib/activity";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const ref = doc(db, `activities/${id}`);
  getDoc(ref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const activity = snapshot.data() as Activity;
        return Response.json({ ...activity, id: id });
      } else {
        console.log(`Activity '${id}' does not exist.`);
        return new Response(`Activity '${id}' does not exist.`, {
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

  return new Response(`Activity '${id}' does not exist.`, {
    status: 404,
  });
}

export async function POST(request: Request) {
  console.log("POST ACTIVITY");
  const activity = (await request.json()) as Activity;
  console.log(activity);

  if (!activity.id) {
    const snapshot = await addDoc(collection(db, "activities"), activity);
    const updateRef = doc(db, "activities", snapshot.id);
    await updateDoc(updateRef, { id: snapshot.id });

    return Response.json({ id: snapshot.id });
  } else {
    const updateRef = doc(db, "activities", activity.id);
    await updateDoc(updateRef, activity);

    return Response.json({ id: activity.id });
  }
}
