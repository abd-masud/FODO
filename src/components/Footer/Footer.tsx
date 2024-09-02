import Image from "next/image";
import subscribe from "../../../public/img/subscribe.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#10111E]">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="flex items-center">
            <Image src={subscribe} height={55} width={50} alt="" />
            <div>
              <p className="text-white font-bold text-[35px] leading-8">
                Newsletter
              </p>
              <p className="text-[#9f9f9f]">
                Subsribe here for get every single updates
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              className="h-[60px] w-[100%] bg-[#141626] focus:outline-none text-bold text-[#AAABC3] text-[14px]"
              type="text"
              placeholder="ENTER YOUR EMAIL ADDRESS"
            />
            <Link
              className="bg-[#7BAE00] text-white text-[14px] p-[20px] text-bold"
              href={"/"}
            >
              SUBSCRIBE NOW
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};
