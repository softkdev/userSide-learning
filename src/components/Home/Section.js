import React from "react";
import OneSection from "./Sections/OneSection";

const Section = () => {
  return (
    <div className="container py-8 mx-auto text-center">
      <h3 className="inline-block mx-auto my-5 text-dark font-extrabold text-4xl pb-5 border-b border-solid border-gray">
        لورم اپیسوم
      </h3>
      <p className="text-xl text-center my-5 font-light">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        <OneSection />
        <OneSection />
        <OneSection />
      </div>
      <div className="my-8 text-center">
        <button className="bg-gray text-white px-3 py-1 text-xl hover:text-opacity-80 hover:bg-opacity-90 mx-auto">
          لورم اپیسوم
        </button>
      </div>
    </div>
  );
};

export default Section;
