import "tailwindcss/tailwind.css";
import "./../../public/assets/fontiran.css";
import "./../../public/style.css";
import { AuthProvider, ProtectRoute } from "../contexts/auth";
import Router from "next/router";
import Layouts from "../components/Layouts";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* <ProtectRoute> */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
      {/* </ProtectRoute> */}
    </AuthProvider>
  );
}

export default MyApp;
