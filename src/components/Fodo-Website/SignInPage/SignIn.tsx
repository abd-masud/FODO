import Link from "next/link";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const SignInPage = () => {
  return (
    <main>
      <Header />
      <div className="bg-[#F2F3F9] flex justify-center">
        <div className="w-[450px] mx-10 my-12 bg-white flex flex-col items-center p-8">
          <h2 className="font-bold text-[#0B2B3C] text-[26px]">Sign In</h2>
          <div className="grid grid-cols-4 w-full gap-2 mb-8 mt-4">
            <Link
              className="col-span-2 bg-[#D04237] flex justify-center items-center w-[100%] py-[15px] rounded-md"
              href={"www.google.com"}
            >
              <FontAwesomeIcon
                className="text-white text-[20px] mr-2"
                icon={faGoogle}
              />
              <span className="text-white font-[600] text-[14px]">Google</span>
            </Link>
            <Link
              className="bg-[#36528C] flex justify-center items-center w-[100%] py-[15px] rounded-md"
              href={"www.google.com"}
            >
              <FontAwesomeIcon
                className="text-white text-[18px]"
                icon={faFacebookF}
              />
            </Link>
            <Link
              className="bg-[#0D8DDC] text-[18px] flex justify-center items-center w-[100%] py-[15px] rounded-md"
              href={"www.google.com"}
            >
              <FontAwesomeIcon className="text-white" icon={faTwitter} />
            </Link>
          </div>
          <form className="w-full">
            <div className="flex flex-col relative">
              <label
                className="font-semibold text-[12px] ml-6 bg-white -mt-[10px] absolute z-5"
                htmlFor="username"
              >
                Mail Or UserName
              </label>
              <input
                id="username"
                className="border-[#EEEEEE] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] mb-6 text-[15px] py-[15px] px-[30px]"
                type="text"
              />
            </div>
            <div className="flex flex-col relative">
              <label
                className="font-semibold text-[12px] ml-6 bg-white -mt-[10px] absolute z-5"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="border-[#EEEEEE] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] mb-6 text-[15px] py-[15px] px-[30px]"
                type="password"
              />
            </div>
            <div className="flex group">
              <input
                id="remember"
                className="border-[#767676] group-hover:border-[#4F4F4F] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] transition duration-300 checked:bg-[#767676] group-hover:checked:bg-[#4F4F4F] rounded"
                type="checkbox"
              />
              <label
                htmlFor="remember"
                className="font-semibold text-[12px] ml-2"
              >
                Remember Me
              </label>
            </div>
            <button className="block bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 text-white text-[15px] w-full py-[15px] my-5">
              LOG IN
            </button>
            <Link
              className="text-[14px] text-[#333333] block text-center mb-1"
              href={"/fodo-web/ForgetPassword"}
            >
              Forget Password
            </Link>
            <p className="text-[14px] text-[#333333] block text-center">
              Don't have account?{" "}
              <Link className="text-[#0D6EFD]" href={"/fodo-web/SignUp"}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};
