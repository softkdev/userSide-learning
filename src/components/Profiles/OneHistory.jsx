import React from "react";
import checkSvg from "./../../../public/assets/svg/check-circle.svg";
import Image from "next/image";

export default () => {
  return (
    <div className="mt-8 border border-solid border-green px-8 py-2">
      <div className="flex items-center w-full justify-around mt-4">
        <p className="text-dark w-1/2 text-2xl  text-center">تاریخ خرید</p>
        <p className="text-dark w-1/2 text-2xl  text-center">1400/07/29</p>
      </div>
      <div className="flex items-center w-full justify-around mt-4">
        <p className="text-dark w-1/2 text-2xl  text-center">تعداد کالا</p>
        <p className="text-dark w-1/2 text-2xl  text-center">4</p>
      </div>
      <div className="flex items-center w-full justify-around mt-4">
        <p className="text-dark w-1/2 text-2xl  text-center">وضعیت</p>
        <p className="text-dark w-1/2 text-2xl  text-center">
          <Image src={checkSvg} alt="check" />
        </p>
      </div>
      <div className="w-full text-center">
        <button className="bg-green mx-auto text-white text-xl rounded-lg px-12 py-3 my-5">
          مشاهده جزئیات
        </button>
      </div>
    </div>
  );
};
