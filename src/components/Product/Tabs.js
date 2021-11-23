import React, { useState } from "react";

const Tabs = () => {
  const [step, setStep] = useState(1);

  const handleClass = (s) => {
    if (s === step) {
      return "text-orang border-b-2 font-medium border-orange";
    } else {
      return "text-gray";
    }
  };
  return (
    <div className="container mx-auto my-10 border border-gray border-solid">
      <div>
        <nav class="flex border-solid border-gray border flex-col sm:flex-row bg-gray bg-opacity-40 ">
          <button
            onClick={() => setStep(1)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              1
            )}`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setStep(2)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              2
            )}`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setStep(3)}
            class={`py-4 px-6 block hover:text-opacity-80 focus:outline-none ${handleClass(
              3
            )}`}
          >
            Tab 3
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
          <h5 className="text-dark text-2xl font-bold text-right">
            لورم اپیسوم 3
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
    </div>
  );
};

export default Tabs;
