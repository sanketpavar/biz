import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const addDocument = async (newPost) => {
  const postRef = doc(collection(db, "posts"));
  await setDoc(postRef, newPost);
};

export const getDocById = async (id) => {
  const postRef = doc(db, "posts", id);
  const docSnapshot = await getDoc(postRef);
  // const doc = await docSnapshot.data();

  return docSnapshot;
};
