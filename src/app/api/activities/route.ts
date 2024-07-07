import { database as db } from "@/app/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");

  let q = query(collection(db, "activities"));

  if (user) {
    q = query(collection(db, "activities"), where("author", "==", user));
  }

  const docs = (await getDocs(q)).docs;
  const res = docs.map((doc) => doc.data());

  return Response.json(res);
}
