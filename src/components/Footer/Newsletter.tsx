import Image from "next/image";
import subscribe from "../../../public/img/subscribe.png";
import Link from "next/link";

export const Newsletter = () => {
  return (
    <div className="bg-[#10111E]">
      <div className="max-w-screen-xl lg:px-0 px-5 mx-auto lg:flex block justify-between py-10 lg:py-16">
        <div className="flex items-center min-w-fit lg:mr-28 mr-0 mb-6 lg:mb-0">
          <Image
            className="mr-5"
            src={subscribe}
            height={55}
            width={50}
            alt=""
          />
          <div>
            <p className="text-white font-bold text-[35px] leading-8">
              Newsletter
            </p>
            <p className="text-[#9f9f9f]">
              Subsribe here for get every single updates
            </p>
          </div>
        </div>
        <div className="flex items-center w-full">
          <input
            className="h-[60px] w-full bg-[#141626] outline-none border-none text-bold text-[#AAABC3] text-[14px] px-10"
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
          />
          <Link
            className="bg-[#7BAE00] text-white text-[14px] p-[20px] text-bold"
            href={"/"}
          >
            SUBSCRIBE&nbsp;NOW
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};
