import { database as db } from "@/app/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("activityId");

    let q = query(collection(db, "activity"));
    if (id) {
        q = query(collection(db, "activity"), where("id", "==", id));
    }

    const docs = (await getDocs(q)).docs;
    const res = docs.map((doc) => doc.data());

    return Response.json(res);
}