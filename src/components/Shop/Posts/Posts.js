import React from "react";
import OnePosts from "./OnePosts";

const Posts = () => {
  return (
    <div className="my-10 container mx-auto text-center">
      <h3 className="inline-block mx-auto my-5 text-dark font-extrabold text-4xl pb-5 border-b border-solid border-gray-500">
        لورم اپیسوم
      </h3>
      <p className="text-xl text-center my-5 font-light">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <div className="flex flex-col justify-center items-center">
        <OnePosts />
        <OnePosts />
        <OnePosts />
        <OnePosts />
        <OnePosts />
        <OnePosts />
      </div>
      <div className="my-8 text-center">
        <button className="bg-gray-500 text-white px-3 py-1 text-xl hover:text-opacity-80 hover:bg-opacity-90 mx-auto">
          لورم اپیسوم
        </button>
      </div>
    </div>
  );
};

export default Posts;
