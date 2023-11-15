import React from "react";

import signIn from "../firebase/auth/signin";
import { useRouter } from "next/router"; // Ensure the right import from 'next/router'

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (result) {
      return router.push("/home");
    }

    // else error
    setError(error.message);
    console.log(error);
  };
  return (
    <div className="container text-center">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h1 className="mt-5 mb-3 display-4">Sign in</h1>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleForm}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="py-3">
              <button className="btn btn-dark" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
