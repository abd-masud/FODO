import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const ShopRight = () => {
  return (
    <main>
      <div className="bg-white py-[20px] px-[30px] relative border mb-6">
        <div className="flex items-center">
          <div className="h-[6px] w-[10px] bg-[#0B2B3C] absolute left-0 mb-[6px]"></div>
          <h3 className="font-[600] text-[18px] text-[#0B2B3C] mb-2">Search</h3>
        </div>
        <div className="">
          <form className="flex items-center" action="">
            <input
              className="border-[#EEEEEE] focus:outline-none focus:ring-0 focus:border-[#7BAE00] transition duration-300 text-[15px] py-[10px] px-[15px] text-[#555555] w-full"
              type="text"
              placeholder="Search here..."
            />
            <button className="group inline p-[10px] border">
              <FontAwesomeIcon
                className="text-[#555555] text-[20px] group-hover:text-[#7BAE00] transition duration-300"
                icon={faMagnifyingGlass}
              />
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white py-[20px] px-[30px] relative border mb-6">
        <div className="flex items-center">
          <div className="h-[6px] w-[10px] bg-[#0B2B3C] absolute left-0 mb-[6px]"></div>
          <h3 className="font-[600] text-[18px] text-[#0B2B3C] mb-2">
            Categories
          </h3>
        </div>
        <div className="">
          <div className="flex flex-col divide-y divide-dashed">
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Fruits & Vegetable
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Meet & Fish
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Beverages
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Biscuits & Snacks
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Breakfast
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Dairy Product
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              Package Foods
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-[20px] px-[30px] relative border mb-6">
        <div className="flex items-center">
          <div className="h-[6px] w-[10px] bg-[#0B2B3C] absolute left-0 mb-[6px]"></div>
          <h3 className="font-[600] text-[18px] text-[#0B2B3C] mb-2">Tags</h3>
        </div>
        <div className="">
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            PASTA
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            ORGANIC
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            GRAPE
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            EGE
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            RICE
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            FOOD
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            FISH
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            COFFEE
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            WATERMELON
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            VEGETABLE
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            NATURAL
          </Link>
          <Link
            className="bg-[#F2F3F9] hover:bg-[#7BAE00] text-[13px] font-bold text-black hover:text-white transition duration-300 py-2 px-[14px] border mr-3 mb-3 inline-block"
            href={""}
          >
            JUICE
          </Link>
        </div>
      </div>
      <div className="bg-white py-[20px] px-[30px] relative border mb-6">
        <div className="flex items-center">
          <div className="h-[6px] w-[10px] bg-[#0B2B3C] absolute left-0 mb-[6px]"></div>
          <h3 className="font-[600] text-[18px] text-[#0B2B3C] mb-2">
            Achieves
          </h3>
        </div>
        <div className="">
          <div className="flex flex-col divide-y divide-dashed">
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              September 2021
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              October 2021
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              November 2021
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              December 2021
            </Link>
            <Link
              className="text-[#555555] text-[15px] hover:text-[#7BAE00] transition duration-300 py-3"
              href={""}
            >
              <FontAwesomeIcon
                className="text-[13px] mr-1"
                icon={faAnglesRight}
              />
              January 2022
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
