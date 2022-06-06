import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const addDocument = async (newPost) => {
  const postRef = doc(collection(db, "posts"));
  await setDoc(postRef, newPost);
};
