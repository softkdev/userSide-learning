import React from "react";
import Image from "next/image";
import Head from "next/head";
import arrowtopSvg from "./../../../public/assets/svg/angle-up.svg";
import arrowdownSvg from "./../../../public/assets/svg/angle-down.svg";
import arrowrightSvg from "./../../../public/assets/svg/arrow-right.svg";
import Baner from "../Layouts/Baner";

const Cart = () => {
  return (
    <div>
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Baner title="سبد خرید" />
      <div className="container mx-auto my-10">
        <div className="shadow-2xl w-full rounded-xl bg-white flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 py-3 px-5">
            <div className="w-full flex justify-between py-3 border-b border-orang border-solid">
              <h4 className="text-dark font-bold md:text-3xl text-2xl text-right">
                سبد خرید
              </h4>
              <h4 className="text-dark md:text-3xl font-bold text-2xl text-left">
                تعداد 4
              </h4>
            </div>
            <div className="my-8 w-full">
              <table className="table table-auto w-full text-right">
                <thead>
                  <tr>
                    <th>جزئیات محصول</th>
                    <th>تعداد</th>
                    <th>قیمت واحد</th>
                    <th>مجموع</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="flex mt-8">
                      <div className="w-1/2 bg-gray-500 h-44"></div>
                      <div className="w-1/2 pr-3">
                        <h5 className="text-dark md:text-3xl text-2xl">
                          لورم اپیسوم
                        </h5>
                        <p className="md:text-xl font-light text-base">
                          لورم اپیسوم
                        </p>
                      </div>
                    </td>
                    <td className="w-32">
                      <div className="border w-28 border-solid border-dark flex">
                        <div className="w-1/2 py-3  text-center text-3xl">
                          2
                        </div>
                        <div className="w-1/2 py-2 px-3 border-r border-dark border-solid">
                          <div>
                            <Image src={arrowtopSvg} alt="arrow top" />
                          </div>
                          <div>
                            <Image src={arrowdownSvg} alt="arrow top" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-orang text-2xl pr-3"> 123 $</td>
                    <td className="text-orang text-2xl pr-3"> 246 $ </td>
                  </tr>
                  <tr>
                    <td className="flex mt-8">
                      <div className="w-1/2 bg-gray-500 h-44"></div>
                      <div className="w-1/2 pr-3">
                        <h5 className="text-dark md:text-3xl text-2xl">
                          لورم اپیسوم
                        </h5>
                        <p className="md:text-xl font-light text-base">
                          لورم اپیسوم
                        </p>
                      </div>
                    </td>
                    <td className="w-32">
                      <div className="border w-28 border-solid border-dark flex">
                        <div className="w-1/2 py-3  text-center text-3xl">
                          2
                        </div>
                        <div className="w-1/2 py-2 px-3 border-r border-dark border-solid">
                          <div>
                            <Image src={arrowtopSvg} alt="arrow top" />
                          </div>
                          <div>
                            <Image src={arrowdownSvg} alt="arrow top" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-orang text-2xl pr-3"> 123 $</td>
                    <td className="text-orang text-2xl pr-3"> 246 $ </td>
                  </tr>
                  <tr>
                    <td className="flex mt-8">
                      <div className="w-1/2 bg-gray-500 h-44"></div>
                      <div className="w-1/2 pr-3">
                        <h5 className="text-dark md:text-3xl text-2xl">
                          لورم اپیسوم
                        </h5>
                        <p className="md:text-xl font-light text-base">
                          لورم اپیسوم
                        </p>
                      </div>
                    </td>
                    <td className="w-32">
                      <div className="border w-28 border-solid border-dark flex">
                        <div className="w-1/2 py-3  text-center text-3xl">
                          2
                        </div>
                        <div className="w-1/2 py-2 px-3 border-r border-dark border-solid">
                          <div>
                            <Image src={arrowtopSvg} alt="arrow top" />
                          </div>
                          <div>
                            <Image src={arrowdownSvg} alt="arrow top" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-orang text-2xl pr-3"> 123 $</td>
                    <td className="text-orang text-2xl pr-3"> 246 $ </td>
                  </tr>
                  <tr>
                    <td className="flex mt-8">
                      <div className="w-1/2 bg-gray-500 h-44"></div>
                      <div className="w-1/2 pr-3">
                        <h5 className="text-dark md:text-3xl text-2xl">
                          لورم اپیسوم
                        </h5>
                        <p className="md:text-xl font-light text-base">
                          لورم اپیسوم
                        </p>
                      </div>
                    </td>
                    <td className="w-32">
                      <div className="border w-28 border-solid border-dark flex">
                        <div className="w-1/2 py-3  text-center text-3xl">
                          2
                        </div>
                        <div className="w-1/2 py-2 px-3 border-r border-dark border-solid">
                          <div>
                            <Image src={arrowtopSvg} alt="arrow top" />
                          </div>
                          <div>
                            <Image src={arrowdownSvg} alt="arrow top" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-orang text-2xl pr-3"> 123 $</td>
                    <td className="text-orang text-2xl pr-3"> 246 $ </td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="my-12 mr-8 flex items-center">
                <div className="mt-3">
                  <Image src={arrowrightSvg} alt="arrow Right" />
                </div>
                <p className="text-dark text-xl mr-2">ادامه خرید</p>
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/12 bg-green rounded-l-xl md:pt-36 pt-10 px-3">
            <div className="sticky top-0 py-8">
              <div className="flex w-full justify-between">
                <p className="text-white text-2xl text-right">تعداد 4</p>
                <p className="text-white text-2xl text-left">984 $ </p>
              </div>
              <div className="mt-16">
                <label htmlFor="takhfif" className="text-white ml-4 text-xl">
                  کد تخفیف{" "}
                </label>
                <div className="relative px-8 w-full">
                  <input
                    type="takhfif"
                    id="takhfif"
                    placeholder=""
                    className="w-full h-full mt-3 px-16 py-4 focus:outline-none appearance-none border border-orang text-white text-xl rounded-2xl bg-cyan "
                  />
                </div>
                <div className="w-1/2 mt-8 pr-8">
                  <button className="bg-orang py-3 w-full text-xl text-white font-bold rounded-full">
                    اعمال کد
                  </button>
                </div>
              </div>
              <div className="mt-16 border-t-2 border-solid border-orang pt-16 flex justify-between w-full">
                <div className="flex w-full justify-between">
                  <p className="text-white text-2xl text-right">قیمت کل</p>
                  <p className="text-white text-2xl text-left">984 $ </p>
                </div>
              </div>
              <div className="mt-16 px-8">
                <button className="bg-orang w-full py-2 pb-4 text-white rounded-full text-2xl font-bold">
                  پرداخت نهایی
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
