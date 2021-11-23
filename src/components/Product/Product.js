import React from "react";
import Image from "next/image";
import svgStar from "./../../../public/assets/svg/Start-Plus.svg";
import svgPlus from "./../../../public/assets/svg/plus-square.svg";
const Product = () => {
  return (
    <div className="container my-10 flex mx-auto justify-center">
      <div className="flex flex-col justify-between items-center">
        <div className="border border-dark border-solid h-16 w-16 "></div>
        <div className="border border-dark border-solid h-16 w-16 mt-3"></div>
        <div className="border border-dark border-solid h-16 w-16 mt-3"></div>
        <div className="border border-dark border-solid h-16 w-16 mt-3"></div>
      </div>
      <div className="mr-3 border border-solid border-gray-500 p-5 w-3/12">
        <div className="bg-gray-500 w-full h-full"></div>
      </div>
      <div className="w-4/12 mr-10">
        <h4 className="text-2xl text-right text-dark mb-3">لورم اپیسوم</h4>
        <Image src={svgStar} />
        <p className="my-5 text-orang text-right text-2xl font-bold">$ 345</p>
        <p className="text-gray-500 font-light text-xl text-right mb-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
        <p className="text-right text-base font-light text-gray-500">
          <span className="text-dark font-bold">لورم </span>اپیسوم
        </p>
        <p className="text-right text-base font-light text-gray-500">
          <span className="text-dark font-bold">لورم </span>اپیسوم متن ساختگی
        </p>
        <div className="flex mt-4">
          <button className="bg-orang px-5 py-3 text-2xl text-white font-bold">
            لورم اپیسوم{" "}
          </button>{" "}
          <button className="bg-gray-500 inline-block p-3 mr-3 pb-2">
            <Image src={svgPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
