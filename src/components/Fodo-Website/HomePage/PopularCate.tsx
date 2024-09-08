import Image from "next/image";
import cate1 from "../../../../public/img/cate/1.png";
import cate2 from "../../../../public/img/cate/2.png";
import cate3 from "../../../../public/img/cate/3.png";
import cate4 from "../../../../public/img/cate/4.png";
import cate5 from "../../../../public/img/cate/5.png";
import cate6 from "../../../../public/img/cate/6.png";
import cate7 from "../../../../public/img/cate/7.png";
import cate8 from "../../../../public/img/cate/8.png";
import Link from "next/link";

export const PopularCate = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4">
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate1}
              alt={""}
              height={60}
              width={60}
            />
            Fresh Fruits
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate2}
              alt={""}
              height={60}
              width={60}
            />
            Vegetable
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate3}
              alt={""}
              height={60}
              width={60}
            />
            Breakfast
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate4}
              alt={""}
              height={60}
              width={60}
            />
            Meet & Fish
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate5}
              alt={""}
              height={60}
              width={60}
            />
            Fresh Fruits
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate6}
              alt={""}
              height={60}
              width={60}
            />
            Beverages
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate7}
              alt={""}
              height={60}
              width={60}
            />
            Beverages
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate8}
              alt={""}
              height={60}
              width={60}
            />
            Beverages
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate2}
              alt={""}
              height={60}
              width={60}
            />
            Snacks
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate3}
              alt={""}
              height={60}
              width={60}
            />
            Beauty & Healthy
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate4}
              alt={""}
              height={60}
              width={60}
            />
            Cooking
          </Link>
          <Link
            href={"/fodo-web/Shop"}
            className="m-auto w-[100%] h-[126px] mb-8 border-[1px] border-gray-250 hover:border-[#7BAE00] transition rounded bg-white text-center"
          >
            <Image
              className="m-auto mt-4 mb-2"
              src={cate8}
              alt={""}
              height={60}
              width={60}
            />
            Fresh Fruits
          </Link>
        </div>
      </div>
    </div>
  );
};
