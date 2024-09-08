import Image from "next/image";
import product1 from "../../../../public/img/product/1.png";
import product2 from "../../../../public/img/product/2.png";
import product3 from "../../../../public/img/product/3.png";
import product4 from "../../../../public/img/product/4.png";
import product5 from "../../../../public/img/product/5.png";
import product6 from "../../../../public/img/product/6.png";
import product7 from "../../../../public/img/product/7.png";
import product8 from "../../../../public/img/product/8.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";
import Link from "next/link";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const ProductInfo = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <main className="bg-[#F2F3F9] pt-24 pb-10">
      <div className="max-w-screen-xl m-auto grid grid-cols-2 bg-white border border-gray-250">
        <div className="">
          <Image
            className="w-full h-auto px-20 py-10"
            src={product6}
            height={500}
            width={500}
            alt={""}
          />
          <div className="w-full px-10 pb-10">
            <Slider {...settings}>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product1}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product2}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product3}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product4}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product5}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product6}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product7}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
              <div className="px-3 over">
                <Link className="group" href={"/fodo-web/Product-Details"}>
                  <Image
                    className="border-[1px] border-gray-250 group-hover:border-[#7BAE00] transition duration-300 p-2"
                    src={product8}
                    height={330}
                    width={330}
                    alt=""
                  />
                </Link>
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex flex-col justify-between p-10">
          <div className="flex items-center">
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon className="mr-1" icon={faStar} />
              <FontAwesomeIcon className="mr-1" icon={faStar} />
              <FontAwesomeIcon className="mr-1" icon={faStar} />
              <FontAwesomeIcon className="mr-1" icon={faStar} />
              <FontAwesomeIcon className="mr-1" icon={faStar} />
            </div>
            <div className="text-[#7BAE00] text-[12px]">( 25 Reviews )</div>
          </div>
          <Link
            className="text-[#0B2B3C] text-[24px] font-[600]"
            href={"/fodo-web/Product-Details"}
          >
            Vegetables Juices
          </Link>
          <p className="text-[#666666] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            dui sed nunc sagittis maximus. Sed lobortis commodo dapibus. Nunc
            placerat, massa nec blandit egestas Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis
            maximus.Lorem ipsum dolor sit amet, consectetur ...
          </p>
          <div className="text-[#7BAE00] font-bold text-[50px]">
            $200<s className="font-[500] text-black text-[28px] ml-2">$210</s>
          </div>
          <div className="flex items-center">
            <span className="font-[900] mr-3">Categories:</span>
            <button className="text-[14px] mr-5 text-black hover:text-[#7BAE00] transition duration-300">
              Cover,{" "}
            </button>
            <button className="text-[14px] mr-5 text-black hover:text-[#7BAE00] transition duration-300">
              Seat,{" "}
            </button>
            <button className="text-[14px] mr-5 text-black hover:text-[#7BAE00] transition duration-300">
              Car,{" "}
            </button>
            <button className="text-[14px] mr-5 text-black hover:text-[#7BAE00] transition duration-300">
              Parts
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-[600]">Colors: </span>
            <button className="h-6 w-6 rounded-full bg-[#FF0000] border-0 hover:border-[3px] border-black ml-4"></button>
            <button className="h-6 w-6 rounded-full bg-[#008000] border-0 hover:border-[3px] border-black ml-4"></button>
            <button className="h-6 w-6 rounded-full bg-[#0000FF] border-0 hover:border-[3px] border-black ml-4"></button>
            <button className="h-6 w-6 rounded-full bg-[#FFFF00] border-0 hover:border-[3px] border-black ml-4"></button>
            <button className="h-6 w-6 rounded-full bg-[#FFA500] border-0 hover:border-[3px] border-black ml-4"></button>
          </div>
          <div>
            <span className="font-[600] mr-3">SIZE:</span>
            <button className="text-gray-600 hover:text-[#7BAE00] text-[13px] border-2 border-gray-300 hover:border-[#7BAE00] transition duration-300 ml-1 py-1 px-2 rounded">
              Small
            </button>
            <button className="text-gray-600 hover:text-[#7BAE00] text-[13px] border-2 border-gray-300 hover:border-[#7BAE00] transition duration-300 ml-1 py-1 px-2 rounded">
              Medium
            </button>
            <button className="text-gray-600 hover:text-[#7BAE00] text-[13px] border-2 border-gray-300 hover:border-[#7BAE00] transition duration-300 ml-1 py-1 px-2 rounded">
              Large
            </button>
            <button className="text-gray-600 hover:text-[#7BAE00] text-[13px] border-2 border-gray-300 hover:border-[#7BAE00] transition duration-300 ml-1 py-1 px-2 rounded">
              Extra Large
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-[150px] justify-between border-t border-b border-[#7BAE00] mr-5">
              <button
                onClick={decrement}
                className="px-1 w-[30px] py-1 bg-[#7BAE00] text-white text-[26px]"
              >
                -
              </button>
              <div className="px-4 bg-white text-center ">{count}</div>
              <button
                onClick={increment}
                className="px-1 w-[30px] py-1 bg-[#7BAE00] text-white text-[26px]"
              >
                +
              </button>
            </div>
            <button className="py-[12.5px] px-[30px] flex items-center justify-center bg-[#7BAE00] hover:bg-[#0B2B3C] text-white transition duration-300">
              <FontAwesomeIcon className="mr-1" icon={faCartShopping} />
              Add to cart
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-[800] text-[20px]">Share:</span>
            <Link
              className="h-11 w-11 rounded-full flex justify-center items-center text-gray-500 hover:text-white transition duration-300 bg-white hover:bg-[#7BAE00] shadow-lg ml-3"
              href={"www.facebook.com"}
            >
              <FontAwesomeIcon className="" icon={faFacebookF} />
            </Link>
            <Link
              className="h-11 w-11 rounded-full flex justify-center items-center text-gray-500 hover:text-white transition duration-300 bg-white hover:bg-[#7BAE00] shadow-lg ml-3"
              href={"www.twitter.com"}
            >
              <FontAwesomeIcon className="" icon={faTwitter} />
            </Link>
            <Link
              className="h-11 w-11 rounded-full flex justify-center items-center text-gray-500 hover:text-white transition duration-300 bg-white hover:bg-[#7BAE00] shadow-lg ml-3"
              href={"www.pinterest.com"}
            >
              <FontAwesomeIcon className="" icon={faPinterestP} />
            </Link>
            <Link
              className="h-11 w-11 rounded-full flex justify-center items-center text-gray-500 hover:text-white transition duration-300 bg-white hover:bg-[#7BAE00] shadow-lg ml-3"
              href={"www.instagram.com"}
            >
              <FontAwesomeIcon className="" icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
