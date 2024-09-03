import Image from "next/image";
import blog1 from "../../../public/img/blog/1.jpg";
import blog2 from "../../../public/img/blog/2.jpg";
import blog3 from "../../../public/img/blog/3.jpg";
import author from "../../../public/img/author.jpg";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Link from "next/link";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const Blog = () => {
  return (
    <main className="max-w-screen-xl m-auto pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className="border border-gray-300 hover:border-[#7BAE00] transition group">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto w-[100%] scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-500"
              src={blog1}
              width={800}
              height={500}
              alt={""}
            />
            <div className="text-[15px] bg-white py-4 px-5 absolute bottom-0">
              <FontAwesomeIcon
                className="text-black mr-1"
                icon={faCalendarDays}
              />
              19 Nov 2021
            </div>
          </div>
          <div className="p-5 bg-white">
            <Link
              className="font-bold text-[20px] text-black hover:text-[#7BAE00] transition"
              href={""}
            >
              Vogue Shopping Weekend 2021.
            </Link>
            <p className="text-[#666666] leading-7 mt-3 mb-6">
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  className="h-[50px] w-[50px] border border-[#7BAE00] rounded-full"
                  src={author}
                  height={95}
                  width={95}
                  alt={""}
                />
                <p className="font-bold text-black ml-3">Sarar Taylor</p>
              </div>
              <div>
                <Link
                  href={""}
                  className="h-[40px] w-[40px] flex justify-center items-center bg-[#7BAE00] rounded-full"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faArrowRightLong}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 hover:border-[#7BAE00] transition group">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto w-[100%] scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-500"
              src={blog2}
              width={800}
              height={500}
              alt={""}
            />
            <div className="text-[15px] bg-white py-4 px-5 absolute bottom-0">
              <FontAwesomeIcon
                className="text-black mr-1"
                icon={faCalendarDays}
              />
              19 Nov 2021
            </div>
          </div>
          <div className="p-5 bg-white">
            <Link
              className="font-bold text-[20px] text-black hover:text-[#7BAE00] transition"
              href={""}
            >
              Vogue Shopping Weekend 2021.
            </Link>
            <p className="text-[#666666] leading-7 mt-3 mb-6">
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  className="h-[50px] w-[50px] border border-[#7BAE00] rounded-full"
                  src={author}
                  height={95}
                  width={95}
                  alt={""}
                />
                <p className="font-bold text-black ml-3">Sarar Taylor</p>
              </div>
              <div>
                <Link
                  href={""}
                  className="h-[40px] w-[40px] flex justify-center items-center bg-[#7BAE00] rounded-full"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faArrowRightLong}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 hover:border-[#7BAE00] transition group">
          <div className="relative overflow-hidden">
            <Image
              className="h-auto w-[100%] scale-100 group-hover:scale-110 rotate-0 group-hover:rotate-3 transition duration-500"
              src={blog3}
              width={800}
              height={500}
              alt={""}
            />
            <div className="text-[15px] bg-white py-4 px-5 absolute bottom-0">
              <FontAwesomeIcon
                className="text-black mr-1"
                icon={faCalendarDays}
              />
              19 Nov 2021
            </div>
          </div>
          <div className="p-5 bg-white">
            <Link
              className="font-bold text-[20px] text-black hover:text-[#7BAE00] transition"
              href={""}
            >
              Vogue Shopping Weekend 2021.
            </Link>
            <p className="text-[#666666] leading-7 mt-3 mb-6">
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  className="h-[50px] w-[50px] border border-[#7BAE00] rounded-full"
                  src={author}
                  height={95}
                  width={95}
                  alt={""}
                />
                <p className="font-bold text-black ml-3">Sarar Taylor</p>
              </div>
              <div>
                <Link
                  href={""}
                  className="h-[40px] w-[40px] flex justify-center items-center bg-[#7BAE00] rounded-full"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faArrowRightLong}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
