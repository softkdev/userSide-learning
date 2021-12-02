import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoShop from "./../../../public/assets/svg/shopping-cart.svg";
import logouser from "./../../../public/assets/svg/user-dark.svg";

const Headers = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="">
        <Link href="/">
          <a className="font-bold text-xl mr-3">لوگو</a>
          {/* <Image src="assets/images/logo.png" /> */}
        </Link>
      </div>
      <div className="container mx-auto flex justify-center py-3">
        <ul className="w-7/12 flex text-center mx-auto">
          <li className="w-3/12">
            <Link href="/">
              <a className="text-xl font-light"> خانه</a>
            </Link>
          </li>
          <li className="w-3/12">
            <Link href="/contact">
              <a className="text-xl font-light">تماس با ما</a>
            </Link>
          </li>
          <li className="w-3/12">
            <Link href="/about">
              <a className="text-xl font-light">درباره ما</a>
            </Link>
          </li>
          <li className="w-3/12">
            <Link href="/feedback">
              <a className="text-xl font-light">بازخورد</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-2 ml-3">
        <Link href="/profile">
          <a className="w-8 ml-3">
            <Image src={logouser} alt="shop" />
          </a>
        </Link>
        <Link href="/shop">
          <a className="w-10">
            <Image src={logoShop} alt="shop" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Headers;
