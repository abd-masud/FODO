import Image from "next/image";
import logo from "../../../../public/img/logo.png";

export const HomeContent = () => {
  return (
    <main className="block w-full h-[calc(100vh-67px)] bg-[#F2F3F9]">
      <div className="mt-[15%]">
        <h1 className="font-extrabold text-[40px] text-[#0B2B3C] text-center">
          Welcome To
        </h1>
        <div className="flex justify-center">
          <Image
            className="h-28 w-auto"
            src={logo}
            height={140}
            width={400}
            alt={""}
          />
        </div>
        <h2 className="font-bold text-[20px] text-[#0B2B3C] text-center">
          Admin Panel
        </h2>
      </div>
    </main>
  );
};
