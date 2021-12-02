import React, { useEffect } from "react";
import Profile from "../../components/pages/Profile";
import {
  handleGetMyAddress,
  handleGetMyInfo,
} from "../../redux/actions/profile";
import { isUserLoggedIn } from "../../config/Utils";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isUserLoggedIn()) {
      router.push("/login");
    }
    dispatch(handleGetMyAddress());
    dispatch(handleGetMyInfo());
  }, []);

  return <Profile />;
};

export default Index;
