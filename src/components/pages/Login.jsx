import React, { useEffect, useState } from "react";
import Baner from "../Layouts/Baner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mailSvg from "./../../../public/assets/svg/envelope.svg";
import keySvg from "./../../../public/assets/svg/key.svg";
import facebookSvg from "./../../../public/assets/svg/facebook.svg";
import googleSvg from "./../../../public/assets/svg/google.svg";
import twitterSvg from "./../../../public/assets/svg/twitter.svg";
import useJwt from "./../../config/useJwt";
import { useDispatch } from "react-redux";
import { handleLogin } from "./../../redux/actions/auth";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { loginSchema } from "./../../validations/auth";

const Login = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [load, setLoad] = useState(false);

  const handleSubmit = async (values) => {
    setLoad(true);
    const form = new FormData();
    form.append("username", values.username);
    form.append("password", values.password);
    try {
      const res = await useJwt.login(form);
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
      <Baner title="صفحه ورود" />
      <div className="py-2 container mx-auto lg:py-16">
        <div className="rounded-xl lg:w-1/2 md:w-3/5 sm:w-3/4  sm:mx-auto mx-3 bg-green shadow-2xl border border-gray-500 border-solid px-8 py-4">
          <h5 className="mb-16 mt-8 text-white text-3xl font-bold text-center mx-16 pb-4 border-b-2 border-orang border-solid ">
            ورود
          </h5>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={loginSchema}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mt-20">
                  <div className="mt-4 px-5">
                    <label
                      htmlFor="username"
                      className="text-white ml-4 text-xl"
                    >
                      ایمیل
                    </label>
                    <div className="relative w-full">
                      <Field
                        type="text"
                        required
                        id="username"
                        name="username"
                        placeholder="ایمیل خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={mailSvg} alt="mail" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 px-5">
                    <label
                      htmlFor="password"
                      className="text-white ml-4 text-xl"
                    >
                      رمز عبور
                    </label>
                    <div className="relative w-full">
                      <Field
                        type="password"
                        min="8"
                        required
                        id="password"
                        name="password"
                        placeholder="رمز عبور خود را وارد نمایید"
                        className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                      />
                      <span className="w-8 top-8 absolute right-4">
                        <Image src={keySvg} alt="mail" />
                      </span>
                    </div>
                  </div>
                  <div className="w-full mt-2 px-5">
                    <p className="text-right ">
                      <a className="text-white text-xl" href="#">
                        رمز عبور خود را فراموش کرده اید؟؟
                      </a>
                    </p>
                  </div>
                  <div className="mt-10 w-full text-left px-5 flex items-center justify-end">
                    <label
                      className="text-white text-xl text-left ml-3"
                      htmlFor="remember"
                    >
                      مرا به خاطر بسپار
                    </label>
                    <Field
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="h-10 w-7"
                    />
                  </div>
                  <div className="my-8 px-5">
                    <button
                      type="submit"
                      disabled={load}
                      className="disabled:opacity-80 disabled:cursor-not-allowed w-full bg-orang text-white text-3xl pb-5 pt-2 rounded-full"
                    >
                      ورود
                    </button>
                  </div>
                  <div className="my-10 flex flex-col items-center justify-center px-5">
                    <p className="text-center w-full text-white text-2xl">
                      - یا -
                    </p>
                    <p className="my-4 text-white text-base text-center w-full">
                      ورود با
                    </p>
                    <div className="my-3 lg:w-5/12  sm:w-8/12 w-10/12 grid-cols-3 gap-5 grid md:px-5">
                      <div>
                        <a href="#">
                          <Image src={twitterSvg} alt="facebook" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <Image src={googleSvg} alt="facebook" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <Image src={facebookSvg} alt="facebook" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-center font-light text-white text-xl">
                        حساب کاربری ندارید؟؟
                        <Link href="/sign-up">
                          <a className="text-white text-2xl font-bold px-3">
                            بسازید
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
