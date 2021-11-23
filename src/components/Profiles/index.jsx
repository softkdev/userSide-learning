import React, { useState } from "react";
import OneFaverite from "./OneFaverite";

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
        {step === 4 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              تاریخچه خرید
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
        {step === 5 && (
          <div className="pt-16 px-24 divide-y-4 divide-green">
            <h3 className="text-dark text-center text-3xl font-bold pb-8 ">
              تغییر رمز عبور
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
      </div>
    </div>
  );
};

export default MenuProfile;
