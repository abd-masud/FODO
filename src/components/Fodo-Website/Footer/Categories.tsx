import Link from "next/link";

export const Categories = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-white mb-8">Categories</p>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Fruits & Vegetables
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Dairy Products
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Package Foods
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Beverage
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Health & Wellness
      </Link>
    </div>
  );
};
