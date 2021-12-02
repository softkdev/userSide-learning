import React from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import { getUserData, isUserLoggedIn } from "../../config/Utils";

const Layouts = ({ children }) => {
  return (
    <div className="main">
      <Headers />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
