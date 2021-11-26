import React from "react";
import Baner from "../Layouts/Baner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mailSvg from "./../../../public/assets/svg/envelope.svg";
import keySvg from "./../../../public/assets/svg/key.svg";
import userSvg from "./../../../public/assets/svg/user.svg";
import phoneSvg from "./../../../public/assets/svg/phone-alt.svg";

const SignUp = () => {
  return (
    <div>
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Baner title="صفحه ساخت حساب کاربری" />
      <div className="py-2 container mx-auto lg:py-16">
        <div className="rounded-xl lg:w-1/2 md:w-3/5 sm:w-3/4  sm:mx-auto mx-3 bg-green shadow-2xl border border-gray-500 border-solid px-8 py-4">
          <h5 className="mb-16 mt-8 text-white text-3xl font-bold text-center mx-16 pb-4 border-b-2 border-orang border-solid ">
            ساخت حساب کاربری
          </h5>
          <div className="mt-20">
            <div className="mt-6 px-5">
              <label htmlFor="fullName" className="text-white ml-4 text-xl">
                نام کامل
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="fullName"
                  placeholder="نام کامل خود را وارد نمایید"
                  className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                />
                <span className="w-7 top-7 absolute right-4">
                  <Image src={userSvg} alt="user" />
                </span>
              </div>
            </div>
            <div className="mt-6 px-5">
              <label htmlFor="phoneNumber" className="text-white ml-4 text-xl">
                ایمیل
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="شماره همراه خود را وارد نمایید"
                  className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                />
                <span className="w-8 top-8 absolute right-4">
                  <Image src={phoneSvg} alt="mail" />
                </span>
              </div>
            </div>
            <div className="mt-6 px-5">
              <label htmlFor="email" className="text-white ml-4 text-xl">
                ایمیل
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="ایمیل خود را وارد نمایید"
                  className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                />
                <span className="w-8 top-8 absolute right-4">
                  <Image src={mailSvg} alt="mail" />
                </span>
              </div>
            </div>
            <div className="mt-6 px-5">
              <label htmlFor="password" className="text-white ml-4 text-xl">
                رمز عبور
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  id="password"
                  placeholder="رمز عبور خود را وارد نمایید"
                  className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                />
                <span className="w-8 top-8 absolute right-4">
                  <Image src={keySvg} alt="mail" />
                </span>
              </div>
            </div>
            <div className="mt-6 px-5">
              <label
                htmlFor="passwordConfirm"
                className="text-white ml-4 text-xl"
              >
                تکرار رمز عبور
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="تکرار رمز عبور خود را وارد نمایید"
                  className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                />
                <span className="w-8 top-8 absolute right-4">
                  <Image src={keySvg} alt="mail" />
                </span>
              </div>
            </div>
            <div className="my-16 px-5">
              <button className="w-full bg-orang text-white md:text-3xl text-2xl pb-5 pt-2 rounded-full">
                ساخت حساب کاربری
              </button>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center px-5">
              <div className="my-3">
                <p className="text-center font-light text-white text-xl">
                  حساب کاربری دارید؟؟
                  <Link href="/login">
                    <a className="text-white text-2xl font-bold px-3">
                      وارد شوید
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
