import React, { useState } from "react";
import star1Svg from "./../../../public/assets/svg/star1.svg";
import star2Svg from "./../../../public/assets/svg/star2.svg";
import star3Svg from "./../../../public/assets/svg/star3.svg";
import star4Svg from "./../../../public/assets/svg/star4.svg";
import star5Svg from "./../../../public/assets/svg/star5.svg";
import telegramSvg from "./../../../public/assets/svg/telegram-plane.svg";
import Image from "next/image";
import OneComments from "../Documents/Posts/OneComments";
const Tabs = () => {
  const [step, setStep] = useState(1);

  const handleClass = (s) => {
    if (s === step) {
      return "text-orang border-b-2 border-solid font-medium border-orange";
    } else {
      return "text-white";
    }
  };
  return (
    <div className="container mx-auto my-10 border border-gray-500 border-solid">
      <div>
        <nav class="flex border-solid border-gray-500 border flex-col sm:flex-row bg-green">
          <button
            onClick={() => setStep(1)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              1
            )}`}
          >
            توضیحات
          </button>
          <button
            onClick={() => setStep(2)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              2
            )}`}
          >
            مشخصات
          </button>
          <button
            onClick={() => setStep(3)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              3
            )}`}
          >
            نظرات
          </button>
        </nav>
      </div>
      {step === 1 && (
        <div className="p-5">
          <h5 className="text-dark text-2xl font-bold text-right">
            لورم اپیسوم 1
          </h5>
          <p className="text-base mt-3 font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <p className="text-base mt-4 font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      )}
      {step === 2 && (
        <div className="p-5">
          <h5 className="text-dark text-2xl font-bold text-right">
            لورم اپیسوم 2
          </h5>
          <p className="text-base mt-3 font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <p className="text-base mt-4 font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      )}
      {step === 3 && (
        <div className="p-5">
          <div className="shadow-2xl rounded-xl px-4 py-10">
            <h3 className="text-center mx-auto border-b border-solid border-orang w-5/12 py-3 my-3 text-2xl ">
              نظرات
            </h3>
            <div className="w-full mt-2 pb-20 px-3 border-b-2 border-orang border-solid">
              <div className="w-full flex-wrap flex justify-start">
                <OneComments />
                <OneComments />
              </div>
              <div className="w-full flex-wrap flex justify-end">
                <OneComments question={true} />
              </div>
              <div className="w-full flex-wrap flex justify-start">
                <OneComments />
              </div>
            </div>
            <h3 className="text-center mx-auto w-5/12 mb-10 mt-3 text-2xl ">
              نظری دارید؟
            </h3>
            <div className="px-10 mt-5">
              <textarea
                rows="5"
                placeholder="نظر خود را وارد کنید"
                className="w-full my-5 border-2 border-solid border-dark focus:outline-none rounded-2xl py-3 px-3 text-xl text-black shadow-2xl"
              ></textarea>
              <div className="mt-3 flex">
                <div className="w-6/12">
                  <p className="text-xl">امتیاز</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <input
                        className="w-8 h-5 ml-2"
                        type="radio"
                        name="star"
                        id="star1"
                        value="star1"
                      />
                      <label className="" htmlFor="star1">
                        <Image src={star1Svg} />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-8 h-5 ml-0"
                        type="radio"
                        name="star"
                        id="star2"
                        value="star2"
                      />
                      <label className="" htmlFor="star2">
                        <Image src={star2Svg} />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-8 h-5 ml-2"
                        type="radio"
                        name="star"
                        id="star3"
                        value="star3"
                      />
                      <label className="" htmlFor="star3">
                        <Image src={star3Svg} />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-8 h-5 ml-2"
                        type="radio"
                        name="star"
                        id="star4"
                        value="star4"
                      />
                      <label className="" htmlFor="star4">
                        <Image src={star4Svg} />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        className="w-8 h-5 ml-2"
                        type="radio"
                        name="star"
                        id="star5"
                        value="star5"
                      />
                      <label className="" htmlFor="star5">
                        <Image src={star5Svg} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 flex items-center">
                  <button className="bg-green rounded-2xl px-3 flex items-center justify-between py-4">
                    <span className="text-white text-xl pb-2">ارسال</span>
                    <span className=" mr-10 w-8">
                      <Image src={telegramSvg} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
