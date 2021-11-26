import React from "react";
import starsgreenSvg from "./../../../../public/assets/svg/stars-green.svg";
import userblackSvg from "./../../../../public/assets/svg/user-black.svg";
import Image from "next/image";

const OneComments = ({ question }) => {
  return (
    <div
      className={`w-8/12 flex items-start mt-10 mb-24 ${
        question && "flex-row-reverse"
      }`}
    >
      <div className=" px-2 py-3 bg-gray-500 rounded-full w-20 flex items-center justify-center">
        <Image src={userblackSvg} alt="user" />
      </div>
      <div
        className={`shadow-2xl flex-1 rounded-3xl rounded-tr-none mr-2 py-3 ${
          question ? "pr-10 pl-5" : "px-5 "
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            question && "flex-row-reverse"
          }`}
        >
          <h6 className="text-xl ">{question ? "admin" : "نام کاربر"}</h6>
          <p className="flex mx-6 justify-between">
            <span className="text-right text-dark text-base ml-3">تاریخ</span>
            <span className="text-dark text-left text-base mr-3">
              1400/08/13
            </span>
          </p>
          <p className="flex mx-6 justify-between">
            <span className="text-right text-dark text-base ml-3">ساعت</span>
            <span className="text-dark text-left text-base mr-3">14 : 13</span>
          </p>
          {!question && (
            <div className="">
              <Image src={starsgreenSvg} alt="star" />
            </div>
          )}
        </div>
        <p className="mt-8 text-xl mb-4 ml-4 mr-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد
        </p>
      </div>
    </div>
  );
};

export default OneComments;
