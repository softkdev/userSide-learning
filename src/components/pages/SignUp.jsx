import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Baner from "../Layouts/Baner";
import mailSvg from "./../../../public/assets/svg/envelope.svg";
import keySvg from "./../../../public/assets/svg/key.svg";
import userSvg from "./../../../public/assets/svg/user.svg";
import phoneSvg from "./../../../public/assets/svg/phone-alt.svg";
import useJwt from "./../../config/useJwt";
import { handleLogin } from "./../../redux/actions/auth";
import { registerSchema } from "./../../validations/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [load, setLoad] = useState(false);

  const handleSubmit = async (values) => {
    console.log({ values });
    setLoad(true);
    const form = new FormData();
    form.append("username", values.username);
    form.append("password", values.password);
    form.append("phone_number", values.phone_number);
    form.append("email", values.email);
    try {
      const res = await useJwt.register(form);
      const result = res.data.data;
      const data = {
        accessToken: result.token,
        refreshToken: result.refreshToken,
        wallet: result.wallet,
      };
      route.push("/profile");
      dispatch(handleLogin(data));
    } catch (err) {
      setLoad(false);
      console.log(err.response);
    }
    setLoad(false);
  };

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
          <Formik
            initialValues={{
              username: "",
              password: "",
              passwordConfirm: "",
              phone_number: "",
              email: "",
            }}
            validationSchema={registerSchema}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mt-20">
                  <div className="mt-6 px-5">
                    <label
                      htmlFor="username"
                      className="text-white ml-4 text-xl"
                    >
                      نام کاربری
                    </label>
                    <div className="relative w-full">
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        placeholder="نام کاربری خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-7 top-7 absolute right-4">
                        <Image src={userSvg} alt="user" />
                      </span>
                    </div>
                    <span className="text-red-500 font-bold mt-2 ">
                      <ErrorMessage name="username" />
                    </span>
                  </div>
                  <div className="mt-6 px-5">
                    <label
                      htmlFor="phone_number"
                      className="text-white ml-4 text-xl"
                    >
                      شماره همراه
                    </label>
                    <div className="relative w-full">
                      <Field
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.length <= 11) {
                            setFieldValue("phone_number", value);
                          }
                        }}
                        name="phone_number"
                        type="number"
                        id="phone_number"
                        placeholder="شماره همراه خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={phoneSvg} alt="mail" />
                      </span>
                    </div>
                    <span className="text-red-500 font-bold mt-2 ">
                      <ErrorMessage name="phone_number" />
                    </span>
                  </div>
                  <div className="mt-6 px-5">
                    <label htmlFor="email" className="text-white ml-4 text-xl">
                      ایمیل
                    </label>
                    <div className="relative w-full">
                      <Field
                        name="email"
                        type="email"
                        id="email"
                        placeholder="ایمیل خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={mailSvg} alt="mail" />
                      </span>
                    </div>
                    <span className="text-red-500 font-bold mt-2 ">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                  <div className="mt-6 px-5">
                    <label
                      htmlFor="password"
                      className="text-white ml-4 text-xl"
                    >
                      رمز عبور
                    </label>
                    <div className="relative w-full">
                      <Field
                        name="password"
                        type="password"
                        id="password"
                        placeholder="رمز عبور خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={keySvg} alt="mail" />
                      </span>
                    </div>
                    <span className="text-red-500 font-bold mt-2 ">
                      <ErrorMessage name="password" />
                    </span>
                  </div>
                  <div className="mt-6 px-5">
                    <label
                      htmlFor="passwordConfirm"
                      className="text-white ml-4 text-xl"
                    >
                      تکرار رمز عبور
                    </label>
                    <div className="relative w-full">
                      <Field
                        name="passwordConfirm"
                        type="password"
                        id="passwordConfirm"
                        placeholder="تکرار رمز عبور خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={keySvg} alt="mail" />
                      </span>
                    </div>
                    <span className="text-red-500 font-bold mt-2 ">
                      <ErrorMessage name="passwordConfirm" />
                    </span>
                  </div>
                  <div className="my-16 px-5">
                    <button
                      disabled={load}
                      type="submit"
                      className="disabled:cursor-not-allowed disabled:opacity-80 w-full bg-orang text-white md:text-3xl text-2xl pb-5 pt-2 rounded-full"
                    >
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
              </Form>
            )}
          </Formik>
          s
        </div>
      </div>
    </div>
  );
};

export default SignUp;
