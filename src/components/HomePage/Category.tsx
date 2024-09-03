import Link from "next/link";
import Image from "next/image";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

import { ShippingItems } from "./ShippingItems";
import { PopularCate } from "./PopularCate";
import { PopularProduct } from "./PopularProduct";
import { Deals } from "./Deals";
import { SummerSale } from "./SummerSale";
import { FeaturedProduct } from "./Featuredproduct";
import { Blog } from "./Blog";

export const Category = () => {
  return (
    <main className="bg-[#F2F3F9] pt-10">
      <ShippingItems />
      <div className="max-w-screen-xl mx-auto flex justify-between items-center my-10">
        <h2 className="font-bold text-[24px] text-[#0B2B3C]">
          Popular Category
        </h2>
        <Link
          className="bg-[#87B944] hover:bg-[#0B2B3C] transition duration-500 px-[30px] py-[15px] text-white font-bold"
          href={"/Shop"}
        >
          VIEW ALL
          <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
        </Link>
      </div>
      <PopularCate />
      <div className="max-w-screen-xl mx-auto flex justify-between items-center my-10">
        <h2 className="font-bold text-[24px] text-[#0B2B3C]">
          Popular Products
        </h2>
        <Link
          className="bg-[#87B944] hover:bg-[#0B2B3C] transition duration-500 px-[30px] py-[15px] text-white font-bold"
          href={"/Shop"}
        >
          VIEW ALL
          <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
        </Link>
      </div>
      <PopularProduct />
      <Deals />
      <SummerSale />
      <div className="max-w-screen-xl mx-auto flex justify-between items-center my-10">
        <h2 className="font-bold text-[24px] text-[#0B2B3C]">
          Featured Products
        </h2>
        <Link
          className="bg-[#87B944] hover:bg-[#0B2B3C] transition duration-500 px-[30px] py-[15px] text-white font-bold"
          href={"/Shop"}
        >
          VIEW ALL
          <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
        </Link>
      </div>
      <FeaturedProduct />
      <div className="max-w-screen-xl mx-auto flex justify-between items-center my-10">
        <h2 className="font-bold text-[24px] text-[#0B2B3C]">
          Latest Blog & News
        </h2>
        <Link
          className="bg-[#87B944] hover:bg-[#0B2B3C] transition duration-500 px-[30px] py-[15px] text-white font-bold"
          href={"/Shop"}
        >
          VIEW ALL
          <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
        </Link>
      </div>
      <Blog />
    </main>
  );
};
