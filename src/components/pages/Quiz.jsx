import React from "react";
import Image from "next/image";
import Head from "next/head";

import clockSvg from "./../../../public/assets/svg/clock.svg";
import uploadSvg from "./../../../public/assets/svg/upload.svg";
import dateSvg from "./../../../public/assets/svg/date.svg";
import downloadSvgSvg from "./../../../public/assets/svg/download.svg";
import Baner from "../Layouts/Baner";

const Quiz = () => {
  return (
    <div>
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Baner title="صفحه مسابقه" />
      <div className="container mx-auto my-10">
        <div className="shadow-2xl w-full rounded-xl bg-white flex flex-col md:flex-row">
          <div className="w-full md:w-3/12 bg-green rounded-r-xl pt-6 px-3">
            <div className="flex pb-2 border-b-2 border-solid border-orang mb-4 items-center justify-around">
              <span className="text-white text-xl pb-3">امروز</span>
              <span className="text-white text-xl pb-3">1400/09/04</span>
              <span className="w-15">
                <Image src={dateSvg} alt="date" />
              </span>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
            <div className="my-8 flex justify-between items-center bg-white shadow-2xl rounded-full py-4 px-3 w-full">
              <span className="text-dark font-bold">عنوان کوییز</span>
              <button className="text-white font-light px-4 py-1 bg-orang rounded-full">
                شروع آزمون
              </button>
            </div>
          </div>
          <div className="w-full md:w-9/12 py-3 px-5">
            <div className="mt-3">
              <p className="text-red-600 font-bold">!!! توجه !!!</p>
              <p className="mt-2 text-dark text-base">
                از شروع دانلود زمان محاسبه می شود
              </p>
            </div>
            <div className="mt-20">
              <h2 className="text-3xl text-dark font-bold">عنوان کوییز</h2>
              <p className="text-dark font-light text-xl mt-5">استاد آقای </p>
            </div>
            <div className="px-20 my-10">
              <button className="bg-orang rounded-full w-full px-10 flex items-center justify-between py-4">
                <span className="text-white text-2xl font-bold pb-2">
                  دانلود فایل آزمون
                </span>
                <span className=" mr-10 w-9">
                  <Image src={downloadSvgSvg} />
                </span>
              </button>
            </div>
            <div className="my-12 w-6/12 pr-10 flex mx-auto">
              <div className="px-10">
                <h3 className="text-dark text-3xl text-center font-bold">
                  زمان آزمون
                </h3>
                <p className="border text-3xl font-bold rounded-xl mt-5 border-gray-500 border-solid px-5 py-3 text-center">
                  00 :50 :00
                </p>
              </div>
              <div className="w-3/12">
                <div className="mt-5">
                  <Image src={clockSvg} alt="clock" />
                </div>
              </div>
            </div>
            <div className="mx-10">
              <label
                htmlFor="uploadFile"
                className=" cursor-pointer border border-green border-solid rounded-xl flex w-full"
              >
                <div className="w-8/12">
                  <p className="text-gray-500 py-5 pr-3 text-2xl">
                    محل بارگذاری فایل پاسخ
                  </p>
                </div>
                <div className="w-4/12 bg-green rounded-l-xl px-3 flex items-center justify-center py-4">
                  <span className="text-white text-2xl font-bold pb-2">
                    بارگذاری
                  </span>
                  <span className=" mr-10 w-9">
                    <Image src={uploadSvg} />
                  </span>
                </div>
              </label>
              <input className="hidden" id="uploadFile" type="file" />
            </div>
            <div className="mt-28 mx-10">
              <h5 className="text-3xl font-light">توضیحات تکمیلی</h5>
              <p className="text-base mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <div className="mt-28 mx-28 mb-10">
              <button className="bg-orang rounded-full w-full px-10 flex items-center justify-between py-4">
                <span className="text-white text-2xl font-bold pb-2">
                  دانلود پاسخنامه آزمون
                </span>
                <span className=" mr-10 w-9">
                  <Image src={downloadSvgSvg} />
                </span>
              </button>
              <p className="mt-5 text-center">
                لینک پس از پایان آزمون فعال میشود
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
