import Link from "next/link";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const ForgetPasswordPage = () => {
  return (
    <main>
      <Header />
      <div className="bg-[#0b0c16] flex justify-center">
        <div className="w-[450px] mx-10 my-12 bg-white flex flex-col items-center p-8">
          <h2 className="font-bold text-[#0B2B3C] text-[26px]">
            Forget Password
          </h2>
          <form className="w-full mt-12">
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
            <button className="block bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 text-white text-[15px] w-full py-[15px] mb-5">
              SEND
            </button>
            <p className="text-[14px] text-[#333333] block text-center">
              Forget it,{" "}
              <Link className="text-[#0D6EFD]" href={"/fodo-web/SignIn"}>
                send me back{" "}
              </Link>
              to the sign in.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};
