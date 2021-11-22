import React from "react";
import Baner from "../Layouts/Baner";
import Posts from "../Shop/Posts/Posts";

const Shop = () => {
  return (
    <div>
      <Baner title="صفحه محصول" />
      <Posts />
      <div className="my-16"></div>
      <div className="container mb-5 mx-auto">
        <div className="flex justify-center">
          <button className="border mx-2 font-bold text-xl border-green border-solid w-10 h-10">
            1
          </button>
          <button className="border mx-2 font-bold text-xl border-green border-solid w-10 h-10">
            2
          </button>
          <button className="border mx-2 font-bold text-xl bg-green text-white border-green border-solid w-10 h-10">
            3
          </button>
          <button className="border mx-2 font-bold text-xl border-green border-solid w-10 h-10">
            4
          </button>
          <button className="border mx-2 font-bold text-xl border-green border-solid w-10 h-10">
            5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
