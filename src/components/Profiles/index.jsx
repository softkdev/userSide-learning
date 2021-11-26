import React, { useState } from "react";
import OneFaverite from "./OneFaverite";
import OneHistory from "./OneHistory";

const MenuProfile = () => {
  const [step, setStep] = useState(1);
  const handleStep = (s) => {
    if (step === s) {
      return `bg-orang hover:bg-gray-500`;
    } else {
      return `hover:bg-gray-600`;
    }
  };

  return (
    <div className="my-10 container mx-auto border border-solid relative border-gray-500 flex min-h-screen">
      <div className="w-3/12 bg-green pt-5 pb-4 ">
        <div className="sticky top-5">
          <button onClick={() => setStep(1)} className="w-full">
            <p
              className={`hover:opacity-80 transition-all py-4  text-white text-xl text-center ${handleStep(
                1
              )}`}
            >
              توضیحات
            </p>
          </button>
          <button onClick={() => setStep(2)} className="w-full">
            <p
              className={`hover:opacity-80 transition-all py-4 hover:bg-gray-600 text-white text-xl text-center ${handleStep(
                2
              )}`}
            >
              علاقه مندی ها
            </p>
          </button>
          <button onClick={() => setStep(3)} className="w-full">
            <p
              className={`hover:opacity-80 transition-all py-4 hover:bg-gray-600 text-white text-xl text-center ${handleStep(
                3
              )}`}
            >
              اطلاعات شخصی
            </p>
          </button>
          <button onClick={() => setStep(4)} className="w-full">
            <p
              className={`hover:opacity-80 transition-all py-4 hover:bg-gray-600 text-white text-xl text-center ${handleStep(
                4
              )}`}
            >
              تاریخچه خرید
            </p>
          </button>
          <button onClick={() => setStep(5)} className="w-full">
            <p
              className={`hover:opacity-80 transition-all py-4 hover:bg-gray-600 text-white text-xl text-center ${handleStep(
                5
              )}`}
            >
              تغییر رمز
            </p>
          </button>
        </div>
      </div>
      <div className="flex-1">
        {step === 1 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              توضیحات
            </h3>
            <p className="pt-8 text-xl text-justify ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        )}
        {step === 2 && (
          <div className="pt-16 px-10 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              علاقه مندی ها
            </h3>
            <div className="pt-16 grid grid-cols-2 gap-8 ">
              <OneFaverite />
              <OneFaverite />
              <OneFaverite />
              <OneFaverite />
              <OneFaverite />
              <OneFaverite />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              اطلاعات شخصی
            </h3>
            <div className="pt-8 w-full">
              <div className="w-full mt-4">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="name"
                >
                  نام
                </label>
                <input
                  type="text"
                  placeholder="نام خود را بنویسید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="name"
                />
              </div>
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="name"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  placeholder="نام خانوادگی خود را بنویسید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="name"
                />
              </div>
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="name"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  placeholder="نام کاربری خود را بنویسید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="name"
                />
              </div>
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="name"
                >
                  شماره تماس
                </label>
                <input
                  type="number"
                  placeholder="شماره تماس خود را بنویسید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="name"
                />
              </div>
              <button
                type="submit"
                className="w-full my-15 py-5 text-2xl bg-green rounded-lg text-white font-bold"
              >
                ثبت
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              تاریخچه خرید
            </h3>
            <div className="py-8 w-full">
              <OneHistory />
              <OneHistory />
              <OneHistory />
              <OneHistory />
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              تغییر رمز عبور
            </h3>
            <div className="pt-8 w-full">
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="currentPassword"
                >
                  رمز عبور فعلی
                </label>
                <input
                  type="password"
                  placeholder="رمز عبور فعلی خود را وارد نمایید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="currentPassword"
                />
              </div>
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="newPassword"
                >
                  رمز عبور جدید
                </label>
                <input
                  type="password"
                  placeholder="رمز عبور جدید خود را وارد نمایید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="newPassword"
                />
              </div>
              <div className="w-full mt-10">
                <label
                  className="text-right text-dark mb-2 text-2xl"
                  htmlFor="repeatPassword"
                >
                  تکرار رمز جدید
                </label>
                <input
                  type="password"
                  placeholder="تکرار رمز عبور جدید خود را وارد نمایید"
                  className="border border-solid text-xl mt-2 focus:outline-none border-green rounded w-full py-5 px-5"
                  id="repeatPassword"
                />
              </div>
              <button
                type="submit"
                className="w-full my-15 py-5 text-2xl bg-green rounded-lg text-white font-bold"
              >
                ثبت
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuProfile;
