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
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const PopularProduct = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product1}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product2}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product3}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product4}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product5}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product6}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product7}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
            href={"/fodo-web/Product-Details"}
          >
            <div className="bg-[#7BAE00] h-10 w-10 rounded-full flex justify-center items-center absolute top-5 right-5">
              <FontAwesomeIcon className="text-white" icon={faHeart} />
            </div>
            <Image
              className="scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-300 h-full w-full"
              src={product8}
              height={330}
              width={330}
              alt=""
            />
            <div className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50">
              <span>Add to Cart</span>
            </div>
            <div className="text-[#FFCC00]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="my-2">Purnava omega 3 Enri...</p>
            <p>
              <span className="text-[#7BAE00] font-bold text-[18px] mr-1">
                $200
              </span>
              <s className="text-[14px]">$210</s>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
