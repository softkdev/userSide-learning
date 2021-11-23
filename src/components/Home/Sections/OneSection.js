import React from "react";
import Link from "next/link";

const OneSection = () => {
  return (
    <div className="border border-solid border-gray">
      <div className="h-52 bg-gray "></div>
      <div className="relative px-5 py-8">
        <h5 className="text-xl text-gray text-right font-light">لورم اپیسوم</h5>
        <p className="text-dark font-light text-right mb-4 text-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <div className="flex mb-10">
          <div className="w-10 h-10 bg-gray ml-3 rounded-full"></div>
          <p className="text-xl text-gray text-right font-light">لورم اپیسوم</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Link href="/products">
            <button className="border border-gray text-dark py-2">
              لورم اپیسوم
            </button>
          </Link>
          <Link href="/shop">
            <button className="border bg-orang border-gray text-white py-2">
              لورم اپیسوم
            </button>
          </Link>
        </div>
        <div className="absolute -top-6 h-12 w-12 left-10 rounded-full bg-orang"></div>
      </div>
    </div>
  );
};

export default OneSection;
