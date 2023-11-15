import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export default async function signIn(email, password) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e, "signin error");
    error = e;
  }

  return { result, error };
}
