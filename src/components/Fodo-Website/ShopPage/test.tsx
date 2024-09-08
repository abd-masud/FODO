import Image from "next/image";
import product1 from "../../../../public/img/product/1.png";
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

export const ShopLeft = () => {
  const handleAddToCartClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    // Add your logic for adding to cart here
    console.log("Added to cart");
  };
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          className="flex flex-col justify-center items-center m-auto bg-white px-3 py-5 border-[1px] border-gray-250 hover:border-[#7BAE00] transition duration-300 group relative overflow-hidden"
          href={"/Product-Details"}
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
          <button
            onClick={handleAddToCartClick}
            className="py-3 px-8 bg-white text-black hover:bg-[#7BAE00] hover:text-white transition absolute mt-24 duration-300 opacity-0 group-hover:opacity-100 z-50"
          >
            <span>Add to Cart</span>
          </button>
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
    </main>
  );
};
