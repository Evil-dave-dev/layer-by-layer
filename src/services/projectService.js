import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  where,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// CREATE project
export const createProject = async (name, description, ownerId) => {
  try {
    const docRef = await addDoc(collection(db, "projects"), {
      name,
      description,
      ownerId,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("Erreur lors de l'ajout du projet:", err);
    throw err;
  }
};

// READ projects
export const readProjects = async (ownerId) => {
  if (!ownerId) {
    return [];
  }
  const q = query(collection(db, "projects"), where("ownerId", "==", ownerId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// CREATE painting in project
export const createUserPainting = async (projectId, paintingId) => {
  console.log("create user painting");
  const currentPaintingRef = collection(db, "projects", projectId, "paintings");
  const newPaintingRef = await addDoc(currentPaintingRef, paintingId);
  return { id: newPaintingRef.id };
};

// READ painting in project
export const readUserPainting = async (projectId, paintingId) => {
  console.log("read user painting");
  const paintingRef = doc(db, "projects", projectId, "paintings", paintingId);
  const snapshot = await getDocs(paintingRef);
  return { id: snapshot.id, ...snapshot.data() };
};

// UPDATE painting in project
export const updateUserPainting = async (projectId, paintingId, update) => {
  console.log("update user painting");
  const paintingRef = doc(db, "projects", projectId, "paintings", paintingId);
  await updateDoc(paintingRef, update);
};

// DELETE painting in project
export const deleteUserPainting = async (projectId, paintingId) => {
  console.log("delete user painting");
  const paintingRef = doc(db, "projects", projectId, "paintings", paintingId);
  await deleteDoc(paintingRef);
};
