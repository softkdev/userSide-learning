import React from "react";

const Baner = ({ title }) => {
  return (
    <div className="bg-orang flex flex-col items-center justify-center py-24">
      <h1 className="text-white text-4xl text-center font-bold">{title}</h1>
      <p className="text-center text-white font-light text-sm ">لورم / لورم</p>
    </div>
  );
};

export default Baner;
