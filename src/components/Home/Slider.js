import React from "react";

const Slider = () => {
  return (
    <div className="w-full h-128 bg-orang flex-col max-h-screen flex items-center min-h-full justify-center">
      <h3 className="text-5xl text-white font-bold">دانش بسیار قوی است</h3>
      <p className="text-white my-10 text-xl text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ تایپ به <br />
        پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
        سوالات
      </p>
      <div className="flex items-center justify-between w-2/12">
        <button className="text-white font-bold hover:opacity-80 transition-all border-solid px-3 py-1 border rounded-lg border-white">
          لورم اپیسوم
        </button>
        <button className="text-white font-bold hover:opacity-80 rounded-lg transition-all border-solid px-3 py-1 bg-green">
          لورم اپیسوم
        </button>
      </div>
    </div>
  );
};

export default Slider;
