import React, { useEffect } from "react";
import Head from "next/head";
import Baner from "../Layouts/Baner";
import MenuProfile from "../Profiles";
import { getUserData } from "../../config/Utils";
import { useSelector } from "react-redux";

export default () => {
  const { loading, userAddresses, error, profile } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    console.log(getUserData()?.wallet?.name);
  }, [userAddresses, profile]);

  return (
    <div>
      <Head>
        <title>پروفایل کاربر</title>
      </Head>
      <Baner title="پروفایل کاربر" />
      {/* User Profile Picture */}
      <div className="container mx-auto relative">
        <div className="absolute right-16 -top-16 flex">
          <div className="w-32 h-32 bg-gray-500 rounded-full"></div>
          <p className="text-white text-2xl text-right mr-12 mt-4">نام کاربر</p>
        </div>
      </div>
      <div className="my-32"></div>
      <MenuProfile />
    </div>
  );
};
