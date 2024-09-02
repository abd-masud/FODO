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

export const SummerSale = () => {
  return (
    <main className="max-w-screen-xl m-auto mt-14">
      <div className="bg-[url('/img/summer-sale.jpg')] bg-cover bg-center w-full rounded-lg grid grid-cols-4 relative">
        <div className="col-span-2"></div>
        <div className="pr-16 col-span-2">
          <p className="text-[20px] text-white font-bold mt-20">SUMMER SALE</p>
          <p className="font-[900] text-white text-[70px]">
            <span className="text-[#B1F40D]">39%</span> OFF
          </p>
          <p className="text-[#b5b5b5] text-[20px] mb-10">
            Free on all your order, Free Shipping and 30 days money back
            guarantee
          </p>
          <div className="mb-20">
            <Link
              className="px-10 py-5 bg-[#7BAE00] hover:bg-[#0B2B3C] text-white font-[500] rounded-full transition duration-300"
              href={""}
            >
              SHOP NOW
              <FontAwesomeIcon className="text-white" icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
