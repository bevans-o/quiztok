import { database as db } from "@/app/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  let q = query(collection(db, "streams"));
  const docs = (await getDocs(q)).docs;
  const res = docs.map((doc) => doc.data());

  return Response.json(res);
}
