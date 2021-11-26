import React from "react";
import Image from "next/image";
import Head from "next/head";
import arrowtopSvg from "./../../../public/assets/svg/angle-up.svg";
import arrowdownSvg from "./../../../public/assets/svg/angle-down.svg";
import arrowleftSvg from "./../../../public/assets/svg/arrow-left.svg";
import Baner from "../Layouts/Baner";
import OneDocuments from "../Documents/OneDocuments";

const Documents = () => {
  return (
    <div>
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Baner title="مقالات" />
      <div className="container mx-auto mt-10 mb-32">
        <p className="text-dark text-right text-xl">دسته بندی موضوعی</p>
        <div className="grid md:grid-cols-4 gap-6 grid-cols-2 mt-6 mb-10">
          <button className=" py-3 pb-5 text-white bg-green text-xl">
            عکاسی
          </button>
          <button className=" py-3 pb-5 text-white bg-green text-xl">
            طراحی دیجیتال
          </button>
          <button className=" py-3 pb-5 text-white bg-green text-xl">
            برنامه نویسی
          </button>
          <button className=" py-3 pb-5 text-white bg-green text-xl">
            همه دسته ها
          </button>
        </div>
        <div className="my-16 border-b-2 border-solid border-orang">
          <h4 className="text-dark text-right text-2xl ">مقاله های جدید</h4>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 my-8 md:gap-10 lg:gap-16 gap-6">
            <OneDocuments />
            <OneDocuments />
            <OneDocuments />
          </div>
          <div className="w-full mt-10 mb-3">
            <a href="#" className="ml-8 flex justify-end items-center">
              <p className="text-dark text-xl ml-2">بیشتر</p>
              <div className="mt-3">
                <Image src={arrowleftSvg} alt="arrow left" />
              </div>
            </a>
          </div>
        </div>
        <div className="my-16 border-b-2 border-solid border-orang">
          <h4 className="text-dark text-right text-2xl ">مقاله های برتر</h4>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 my-8 md:gap-10 lg:gap-16 gap-6">
            <OneDocuments />
            <OneDocuments />
            <OneDocuments />
          </div>
          <div className="w-full mt-10 mb-3">
            <a href="#" className="ml-8 flex justify-end items-center">
              <p className="text-dark text-xl ml-2">بیشتر</p>
              <div className="mt-3">
                <Image src={arrowleftSvg} alt="arrow left" />
              </div>
            </a>
          </div>
        </div>
        <div className="my-16 border-b-2 border-solid border-orang">
          <h4 className="text-dark text-right text-2xl ">مقاله های محبوب</h4>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 my-8 md:gap-10 lg:gap-16 gap-6">
            <OneDocuments />
            <OneDocuments />
            <OneDocuments />
          </div>
          <div className="w-full mt-10 mb-3">
            <a href="#" className="ml-8 flex justify-end items-center">
              <p className="text-dark text-xl ml-2">بیشتر</p>
              <div className="mt-3">
                <Image src={arrowleftSvg} alt="arrow left" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
