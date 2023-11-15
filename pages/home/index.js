import React from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { useAuthContext } from "../Context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "../firebase/config";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  console.log(db, "dbs");
  // db.collection("blogs")
  //   .orderBy("quote", "asc")
  //   .get()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // First approch
  // getDocs(collection(db, "blogs")).then((data) => {
  //   console.log(data, "data");
  //   data.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // });

  React.useEffect(() => {
    console.log("test", user);
    // if (user == null) router.push("/");
  }, [user]);

  return <h1>Only logged in users can view this page</h1>;
}

export default Page;

async function getDoument(collection, id) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
