import "tailwindcss/tailwind.css";
import "./../../public/style.css";
import { AuthProvider, ProtectRoute } from "../contexts/auth";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
