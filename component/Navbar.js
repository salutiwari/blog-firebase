import Link from "next/link";
import { useAuthContext } from "../pages/Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../pages/firebase/config";
import { useRouter } from "next/router";

function Navbar() {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {user ? (
          <>
            <Link href="/home" className="btn btn-primary mr-2">
              Home
            </Link>
            <span className="btn btn-info mr-2">Welcome, {user.email}!</span>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/signup" className="btn btn-primary mr-2">
              Signup
            </Link>
            <Link href="/signin" className="btn btn-primary">
              Signin
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
