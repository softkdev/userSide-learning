import React from "react";
import withPrivateRoute from "../../components/auth/withPrivateRoute";

const Profile = () => {
  return <div>This Is The Profile</div>;
};

Profile.getInitialProps = async (props) => {
  console.info("##### Congratulations! You are authorized! ######", props);
  return {};
};

export default Profile;
// export default withPrivateRoute(Profile);
