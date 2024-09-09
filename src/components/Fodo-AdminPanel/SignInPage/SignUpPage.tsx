import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

export const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include numbers, capital letters, lowercase letters, and special symbols."
      );
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      console.log("Form submitted");
      router.push("/SignIn");
    }
  };
  return (
    <div className="bg-[#F2F3F9] flex justify-center items-center h-screen">
      <div className="w-[450px] mx-10 my-12 bg-white flex flex-col items-center p-8">
        <Link className="mb-10" href={"/fodo-admin/"}>
          <Image src={logo} height={35} width={100} alt={""} />
        </Link>
        <h2 className="font-bold text-[#0B2B3C] text-[20px]">
          Register Account
        </h2>
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
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="border-[#EEEEEE] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] mb-6 text-[15px] py-[15px] px-[30px]"
              type="text"
              required
              autoComplete="off"
            />
          </div>
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
              required
              autoComplete="off"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="font-semibold text-[12px] ml-6 bg-white -mt-[10px] absolute z-5"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              id="confirm"
              className="border-[#EEEEEE] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] text-[15px] py-[15px] px-[30px]"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          {error && (
            <p className="text-red-500 text-[14px] mb-4 text-center">{error}</p>
          )}
          <button
            onClick={handleSubmit}
            className="block bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 text-white text-[15px] w-full py-[15px] my-5"
          >
            REGISTER
          </button>

          <p className="text-[14px] text-[#333333] block text-center">
            Already have an account?{" "}
            <Link className="text-[#0D6EFD]" href={"/fodo-admin/SignIn"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
