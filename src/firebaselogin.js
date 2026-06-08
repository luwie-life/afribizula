import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth }
  from "./firebase";

const userCredential =
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

const token =
  await userCredential.user
    .getIdToken();
