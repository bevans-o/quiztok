import { database as db } from "@/app/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");

  let q = query(collection(db, "badges"));

  if (author) {
    q = query(collection(db, "badges"), where("author", "==", author));
  }

  const docs = (await getDocs(q)).docs;
  const res = docs.map((doc) => doc.data());

  return Response.json(res);
}
