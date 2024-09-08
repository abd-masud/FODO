import Link from "next/link";

export const Account = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-white mb-8">My Account</p>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        My Account
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Login Page
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Shopping cart
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Register Account
      </Link>
      <Link
        className="flex items-center mb-3 text-[#A29E9E] text-[15px] hover:text-white no-underline hover:underline transition duration-500"
        href={""}
      >
        Logut
      </Link>
    </div>
  );
};
