import Link from "next/link";

export const Help = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-white mb-8">Need Help?</p>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Help Center
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Fodo Market Terms
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Author Terms
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Fodo Licenses
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Contact Us
      </Link>
    </div>
  );
};
