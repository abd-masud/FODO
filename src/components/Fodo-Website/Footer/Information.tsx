import Link from "next/link";

export const Information = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-white mb-8">Information</p>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        About Us
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Contact Us
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Privacy Policy
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Frequently Questions
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Customer Service
      </Link>
    </div>
  );
};
