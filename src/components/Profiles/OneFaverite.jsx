import React from "react";
import starsSvg from "./../../../public/assets/svg/stars.svg";
import Image from "next/image";

const OneFaverite = () => {
  return (
    <div className="px-4 py-3 border border-green border-solid">
      <div className="bg-gray-500 h-48"></div>
      <h5 className="text-dark text-3xl text-right py-5">لورم اپیسوم</h5>
      <p className="text-dark font-light text-lg mb-3">
        لورم اپیسوم متن ساختگی با تولید
      </p>
      <div className="flex justify-between">
        <Image src={starsSvg} alt="star" />
        <span className="text-orang text-left text-2xl">245 </span>
      </div>
    </div>
  );
};

export default OneFaverite;
