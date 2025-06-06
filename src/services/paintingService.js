import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const readAllPaintings = async () => {
  console.log("read all painting");
  const snapshot = await getDocs(collection(db, "paintings"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
