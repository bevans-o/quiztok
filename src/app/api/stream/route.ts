import { database as db } from "@/app/firebaseConfig";
import { Stream } from "@/app/lib/stream";
import { doc, setDoc } from "firebase/firestore";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const stream = (await request.json()) as Stream;

  await setDoc(doc(db, "streams", stream.host), stream);

  return Response.json({ id: stream.host });
}
