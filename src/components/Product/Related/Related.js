import React from "react";
import OneRelated from "./OneRelated";

const Related = () => {
  return (
    <div className="container py-8 mx-auto text-center">
      <h3 className="inline-block mx-auto my-5 text-dark font-extrabold text-4xl pb-5 border-b border-solid border-gray">
        لورم اپیسوم
      </h3>
      <p className="text-xl text-center my-5 font-light">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <div className="grid container mx-auto grid-cols-4 gap-4">
        <OneRelated />
        <OneRelated />
        <OneRelated />
        <OneRelated />
      </div>
    </div>
  );
};

export default Related;
