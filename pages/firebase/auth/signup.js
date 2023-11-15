import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export default async function signUp(email, password) {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e, "signup error");
    error = e;
  }

  return { result, error };
}
