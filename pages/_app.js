import Navbar from "../component/Navbar";
// import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./Context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
