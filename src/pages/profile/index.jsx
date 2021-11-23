import React from "react";
import withPrivateRoute from "../../components/auth/withPrivateRoute";
import Profile from "../../components/pages/Profile";

const Index = () => {
  return <Profile />;
};

Index.getInitialProps = async (props) => {
  console.info("##### Congratulations! You are authorized! ######", props);
  return {};
};

export default Index;
// export default withPrivateRoute(Index);
