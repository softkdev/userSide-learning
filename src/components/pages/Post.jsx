import React from "react";
import Image from "next/image";
import Head from "next/head";

import downloadSvg from "./../../../public/assets/svg/download.svg";
import star1Svg from "./../../../public/assets/svg/star1.svg";
import star2Svg from "./../../../public/assets/svg/star2.svg";
import star3Svg from "./../../../public/assets/svg/star3.svg";
import star4Svg from "./../../../public/assets/svg/star4.svg";
import star5Svg from "./../../../public/assets/svg/star5.svg";
import telegramSvg from "./../../../public/assets/svg/telegram-plane.svg";
import Baner from "../Layouts/Baner";
import OneDocuments from "../Documents/OneDocuments";
import OneComments from "../Documents/Posts/OneComments";

const Post = () => {
  return (
    <div>
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Baner title="صفحه مقاله" />
      <div className="container mx-auto mt-10 mb-32">
        <div className="flex pl-10 pb-8 border-orang border-b-2 border-solid">
          <div className="h-60 w-3/12 ml-2 bg-gray-500"></div>
          <div className="flex-1  pr-3">
            <h2 className="text-dark text-4xl mb-10 font-bold">لورم اپیسوم</h2>
            <p className="my-3 text-2xl font-light ">نویسندگان</p>
            <div className="my-3 flex items-center justify-between">
              <p className="text-2xl font-light">موضوع</p>
              <p className="text-2xl font-light text-left">طراحی</p>
            </div>
            <div className="my-3 flex items-center justify-between">
              <p className="text-2xl font-light">تاریخ انتشار</p>
              <p className="text-2xl font-light text-left">1400/06</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8">
          <h1 className="text-5xl my-4">لورم اپیسوم سازنده متن های نامفهوم</h1>
          <p className="text-xl mt-10 text-justify ml-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="my-8 h-80 bg-gray-500"></div>
          <p className="text-xl mt-10 text-justify ml-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="flex mt-10 my-8">
            <div className="w-5/12 ml-4 h-80 bg-gray-500"></div>
            <p className="flex-1 text-xl text-justify ml-3">
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
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            </p>
          </div>
          <p className="text-xl mt-10 text-justify ml-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="flex justify-end mt-20 mb-3 pb-20 border-b-2 border-solid border-orang">
          <div className="w-5/12">
            <button className="bg-green rounded-full flex items-center py-3 justify-center w-full">
              <span className=" text-white text-2xl ml-3">دانلود مقاله</span>
              <span className="mr-3 w-12">
                <Image src={downloadSvg} alt="download" />
              </span>
            </button>
          </div>
        </div>
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
    </div>
  );
};

export default Post;
