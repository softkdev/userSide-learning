import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-green flex flex-col items-center py-16">
        <h3 className="text-white font-bold text-center text-3xl my-5">
          لورم اپیسوم
        </h3>
        <div className="container mt-5">
          <div className="flex w-4/12 mx-auto">
            <input
              type="text"
              className="w-9/12 ml-3 placeholder-shown:text-gray text-right px-5 py-2 bg-white text-dark"
              placeholder="لورم اپیسوم"
            />
            <button className="w-4/12 bg-orang text-white text-xl py-2">
              لورم اپیسوم
            </button>
          </div>
        </div>
      </div>
      <div className="bg-dark py-16">
        <div className="container mx-auto grid grid-cols-4 gap-6">
          <div className="text-right">
            <h5 className="text-white text-2xl font-bold mb-6">لورم اپیسوم</h5>
            <p className="text-justify text-md font-light text-gray">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ار صنعت چاپ، و با
              استفاده ار طراحان گرافیک است
            </p>
          </div>
          <div className="text-right">
            <h5 className="text-white text-2xl font-bold mb-6">لورم اپیسوم</h5>
            <div>
              <div className="flex mt-5 justify-between items-stretch">
                <div className="w-4/12 bg-gray  ml-8"></div>
                <div className="w-9/12 text-right">
                  <h6 className="text-base font-bold mb-3 text-white">
                    لورم اپیسوم
                  </h6>
                  <p className="text-gray font-light text-sm ">
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                </div>
              </div>
              <div className="flex mt-5 justify-between items-stretch">
                <div className="w-4/12 bg-gray  ml-8"></div>
                <div className="w-9/12 text-right">
                  <h6 className="text-base font-bold mb-3 text-white">
                    لورم اپیسوم
                  </h6>
                  <p className="text-gray font-light text-sm ">
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <h5 className="text-white text-2xl font-bold mb-6">لورم اپیسوم</h5>
            <div className="grid grid-cols-2 gap-1">
              <div>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم اپیسوم
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم اپ
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم اپیس
                </p>
              </div>
              <div>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم 1
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لور
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم
                </p>
                <p className="mt-3 text-base font-light text-gray text-right">
                  لورم اپ
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <h5 className="text-white text-2xl font-bold mb-6">لورم اپیسوم</h5>
            <div className="grid grid-cols-3 gap-4 h-40">
              <div className="bg-gray"></div>
              <div className="bg-gray"></div>
              <div className="bg-gray"></div>
              <div className="bg-gray"></div>
              <div className="bg-gray"></div>
              <div className="bg-gray"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
