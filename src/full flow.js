const userCredential =
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

const token =
  await userCredential.user
    .getIdToken();

const response =
  await fetch(
    "http://localhost:5000/api/users/profile",
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

const data =
  await response.json();

console.log(data);
