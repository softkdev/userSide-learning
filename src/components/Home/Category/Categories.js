import React from "react";
import Image from "next/image";
import svgComment from "./../../../../public/assets/svg/comment-alt.svg";
import svgBriefcase from "./../../../../public/assets/svg/briefcase.svg";
import svgCofee from "./../../../../public/assets/svg/coffee.svg";
import svgBell from "./../../../../public/assets/svg/bell.svg";

const Categories = () => {
  return (
    <div className="container grid grid-cols-4 gap-6 mx-auto -mt-20">
      <div className="bg-white flex flex-col items-center justify-around py-10 border-solid border border-gray-500 ">
        <Image src={svgComment} className="w-8 my-5" />
        <h4 className="text-dark text-3xl font-bold mt-8">لورم اپیسوم</h4>
        <p className="text-dark font-light text-lg my-5 mx-4 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="bg-white flex relative flex-col items-center justify-around py-10 border-solid border border-gray-500 ">
        <Image src={svgBriefcase} className="w-8 my-5" />
        <h4 className="text-dark text-3xl font-bold mt-8">لورم اپیسوم</h4>
        <p className="text-dark font-light text-lg my-5 mx-4 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <div className="absolute -bottom-8 right-auto left-auto w-16 h-16 bg-green rounded-full"></div>
      </div>
      <div className="bg-white flex flex-col items-center justify-around py-10 border-solid border border-gray-500 ">
        <Image src={svgBell} className="w-8 my-5" />
        <h4 className="text-dark text-3xl font-bold mt-8">لورم اپیسوم</h4>
        <p className="text-dark font-light text-lg my-5 mx-4 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="bg-white flex flex-col items-center justify-around py-10 border-solid border border-gray-500 ">
        <Image src={svgCofee} className="w-8 my-5" />
        <h4 className="text-dark text-3xl font-bold mt-8">لورم اپیسوم</h4>
        <p className="text-dark font-light text-lg my-5 mx-4 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
    </div>
  );
};

export default Categories;
