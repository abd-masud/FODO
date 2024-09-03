import Image from "next/image";
import payment from "../../../public/img/payment.png";

export const Copyright = () => {
  return (
    <div className="bg-[#000000] border-t-[#333333] border-t">
      <div className="max-w-screen-xl m-auto lg:px-0 px-5 lg:flex block justify-between items-center py-7">
        <div className="lg:mb-0 mb-4">
          <Image src={payment} width={330} height={30} alt={""} />
        </div>
        <div className="text-[#A29E9E] text-[15px]">
          Copyright © 2021 Fodo Theme by{" "}
          <span className="font-bold no-underline hover:underline text-[#A29E9E] hover:text-white transition duration-500">
            CodexUnicTheme
          </span>
        </div>
      </div>
    </div>
  );
};
