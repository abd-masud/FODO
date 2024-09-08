import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const ShippingItems = () => {
  return (
    <div className="max-w-screen-xl m-auto bg-white grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
      <div className="flex items-center p-[30px] group">
        <div className="h-[50px] w-[50px] rounded-full bg-[#D9D9D9] group-hover:bg-[#87B944] transition duration-500 flex justify-center items-center mr-3">
          <FontAwesomeIcon
            className="text-black group-hover:text-white transition duration-500 text-[20px]"
            icon={faTruck}
          />
        </div>
        <div>
          <p className="font-bold text-[#0B2B3C]">Free Shipping</p>
          <p className="text-[#666666] text-[13px]">
            Free UK shipping when you spend £30.
          </p>
        </div>
      </div>
      <div className="flex items-center p-[30px] group">
        <div className="h-[50px] w-[50px] rounded-full bg-[#D9D9D9] group-hover:bg-[#87B944] transition duration-500 flex justify-center items-center mr-3">
          <FontAwesomeIcon
            className="text-black group-hover:text-white transition duration-500 text-[20px]"
            icon={faPagelines}
          />
        </div>
        <div>
          <p className="font-bold text-[#0B2B3C]">Get Fresh Products</p>
          <p className="text-[#666666] text-[13px]">
            Find a range of best online organic food.
          </p>
        </div>
      </div>
      <div className="flex items-center p-[30px] group">
        <div className="h-[50px] w-[50px] rounded-full bg-[#D9D9D9] group-hover:bg-[#87B944] transition duration-500 flex justify-center items-center mr-3">
          <FontAwesomeIcon
            className="text-black group-hover:text-white transition duration-500 text-[20px]"
            icon={faDollarSign}
          />
        </div>
        <div>
          <p className="font-bold text-[#0B2B3C]">Moneyback Offer</p>
          <p className="text-[#666666] text-[13px]">
            Free UK shipping when you spend £30.
          </p>
        </div>
      </div>
      <div className="flex items-center p-[30px] group">
        <div className="h-[50px] w-[50px] rounded-full bg-[#D9D9D9] group-hover:bg-[#87B944] transition duration-500 flex justify-center items-center mr-3">
          <FontAwesomeIcon
            className="text-black group-hover:text-white transition duration-500 text-[20px]"
            icon={faShieldHalved}
          />
        </div>
        <div>
          <p className="font-bold text-[#0B2B3C]">Safe Payment</p>
          <p className="text-[#666666] text-[13px]">
            We are using secure payment methods.
          </p>
        </div>
      </div>
    </div>
  );
};
