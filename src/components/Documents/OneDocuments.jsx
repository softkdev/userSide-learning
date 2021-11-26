import React from "react";

const OneDocuments = () => {
  return (
    <div className="shadow-2xl px-5 pt-3 pb-2">
      <div className="flex">
        <div className="w-1/2 h-32 bg-gray-500"></div>
        <div className="w-1/2 pr-3">
          <h6 className="text-xl text-dark">لورم اپیسوم</h6>
          <p className=" my-3 text-base font-light">نویسندگان </p>
          <p className=" my-3 text-base font-light">تاریخ انتشار </p>
        </div>
      </div>
      <p className="mt-10 text-justify px-3 text-dark text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال
      </p>
      <div className="mx-3 my-5 ">
        <button className="w-full py-3 pb-5 rounded-xl bg-green text-white text-xl">
          مشاهده مقاله
        </button>
      </div>
    </div>
  );
};

export default OneDocuments;
