import Head from "next/head";

import { useAuthContext } from "./Context/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className=" flex">
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        {user ? (
          <h1>Welcome to blog {user.email}!</h1>
        ) : (
          <h1 className=" text-center text-xxl my-3 font-bold">
            Welcome to this blog
          </h1>
        )}
      </div>
      <hr />
      <div className="container">
        <div className="img flex">
          <Link href="/Hampi">
            <img src="img1.jpeg" alt="" width="50%" height={300} />
          </Link>
          <div className="my-3">
            <h5>Ruins Of Hampi: The Perfect Monsoon Getaway</h5>
            <p> Title: Ruins Of Hampi: The Perfect Monsoon Getaway</p>
          </div>
          <div>
            <Link href={"/folk"}>
              <img src="folk.jpeg" alt="" width={200} height={200} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
