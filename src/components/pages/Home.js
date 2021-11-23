import React from "react";
import Categories from "../Home/Category/Categories";
import Posts from "../Home/Posts/Posts";
import Section from "../Home/Section";
import Slider from "../Home/Slider";
import Head from "next/head";

const Home = () => {
  return (
    <div className="w-full mb-10">
      <Head>
        <title>سایت آموزشی</title>
      </Head>
      <Slider />
      <Categories />
      <div className="my-28"></div>
      <Section />
      <div className="w-full flex-row-reverse flex">
        <div className="w-4/12 bg-gray-500 h-96"></div>
        <div className="w-8/12 ml-5 bg-gray-500"></div>
      </div>
      {/* Posts */}
      <Posts />
      <Section />
    </div>
  );
};

export default Home;
