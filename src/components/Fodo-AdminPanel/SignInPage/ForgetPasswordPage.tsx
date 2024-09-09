import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import Link from "next/link";

export const ForgetPasswordPage = () => {
  return (
    <main>
      <div className="bg-[#F2F3F9] flex justify-center items-center h-screen">
        <div className="w-[450px] mx-10 my-12 bg-white flex flex-col items-center p-8">
          <Link className="mb-10" href={"/fodo-admin/"}>
            <Image src={logo} height={35} width={100} alt={""} />
          </Link>
          <h2 className="font-bold text-[#0B2B3C] text-[20px]">
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
              <Link className="text-[#0D6EFD]" href={"/fodo-admin/SignIn"}>
                send me back{" "}
              </Link>
              to the sign in.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};
