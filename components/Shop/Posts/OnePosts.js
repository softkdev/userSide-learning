import React from "react";

const OnePosts = () => {
  return (
    <div className="border w-full border-solid min-h-72 mt-5 border-gray flex">
      <div className="w-2/12">
        <div className="mx-15 h-24 bg-green text-center text-4xl font-bold text-white">
          27
        </div>
      </div>
      <div className="w-3/12 bg-gray "></div>
      <div className="w-7/12 py-5 pr-12 pl-5">
        <h5 className="text-gray text-right font-light text-3xl">
          لورم اپیسوم
        </h5>
        <p className="font-bold text-2xl text-dark mt-2 mb-8 text-right">
          {" "}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p className="text-2xl font-light text-gray mb-5 text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
        <div className="flex justify-between items-end w-full">
          <div className="w-3/12 text-right">
            <p className="mb-2 text-lg font-bold text-dark">لورم اپیسوم</p>
            <p className="mb-2 text-md font-light text-gray">لورم اپیسوم</p>
          </div>
          <div className="w-3/12 text-right">
            <button className="bg-green text-white font-light text-2xl px-4 py-2">
              لورم اپیسوم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePosts;
