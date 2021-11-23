import React from "react";
import Baner from "../Layouts/Baner";
import Product from "../Product/Product";
import Related from "../Product/Related/Related";
import Tabs from "../Product/Tabs";
import Head from "next/head";

const Products = () => {
  return (
    <div>
      <Head>
        <title>صفحه محصول</title>
      </Head>
      <Baner title="صفحه محصول" />
      <Product />
      <Tabs />
      <Related />
      <div className="my-16"></div>
    </div>
  );
};

export default Products;
