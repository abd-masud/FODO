import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const HomeSlider = () => {
  let settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="bg-[url('/img/slider1.jpg')] bg-cover bg-center w-full flex items-center py-[150px]">
          <div className="max-w-screen-xl m-auto">
            <h1 className="font-[900] leading-[55px] text-[50px] text-[#0B2B3C]">
              Fresh Food & Healthy
              <br />
              Organic Food
            </h1>
            <div className="border-l-4 border-[#7BAE00] my-8">
              <p className="text-[20px] text-[##0B2B3C] font-bold ml-5">
                Sale Up To <span>35% Off</span>
              </p>
              <p className="text-[#666666] ml-5">
                Free Shipping on all Your Order
              </p>
            </div>
            <Link
              className="text-white bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 text-[15px] py-[15px] px-[30px]"
              href={""}
            >
              SHOP NOW{" "}
              <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
        <div className="bg-[url('/img/slider2.jpg')] bg-cover bg-center w-full flex items-center py-[150px]">
          <div className="max-w-screen-xl m-auto text-right">
            <h1 className="font-[900] leading-[55px] text-[50px] text-[#0B2B3C]">
              Fresh Food & Healthy
              <br />
              Organic Food
            </h1>
            <div className="border-r-4 border-[#7BAE00] my-8">
              <p className="text-[20px] text-[##0B2B3C] font-bold mr-5">
                Sale Up To <span>35% Off</span>
              </p>
              <p className="text-[#666666] mr-5">
                Free Shipping on all Your Order
              </p>
            </div>
            <Link
              className="text-white bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 text-[15px] py-[15px] px-[30px]"
              href={""}
            >
              SHOP NOW{" "}
              <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};
