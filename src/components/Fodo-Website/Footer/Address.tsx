import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import dynamic from "next/dynamic";
import Link from "next/link";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const Address = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-white mb-8">Our Address</p>
      <div className="flex items-start mb-3">
        <FontAwesomeIcon
          className="text-[#7BAE00] mt-[2px] mr-4 w-5"
          icon={faLocationDot}
        />
        <p className="text-[#A29E9E] text-[15px]">
          PO Box 16122 Collins Street West Victoria 8007 Australia
        </p>
      </div>
      <div className="flex items-start mb-3">
        <FontAwesomeIcon
          className="text-[#7BAE00] mt-[2px] mr-4 w-5"
          icon={faPhone}
        />
        <p className="text-[#A29E9E] text-[15px]">+61 3 8376 6284</p>
      </div>
      <div className="flex items-start mb-3">
        <FontAwesomeIcon
          className="text-[#7BAE00] mt-[2px] mr-4 w-5"
          icon={faEnvelope}
        />
        <p className="text-[#A29E9E] text-[15px]">info123@gmail.com</p>
      </div>
      <div className="flex">
        <Link
          className="h-8 w-[33px] rounded mr-2 flex justify-center items-center bg-[#084F99]"
          href={"www.facebook.com"}
        >
          <FontAwesomeIcon className="text-white" icon={faFacebookF} />
        </Link>
        <Link
          className="h-8 w-[33px] rounded mr-2 flex justify-center items-center bg-[#1DA1F2]"
          href={"www.instagram.com"}
        >
          <FontAwesomeIcon className="text-white" icon={faTwitter} />
        </Link>
        <Link
          className="h-8 w-[33px] rounded mr-2 flex justify-center items-center bg-custom-gradient"
          href={"www.twitter.com"}
        >
          <FontAwesomeIcon className="text-white" icon={faInstagram} />
        </Link>
        <Link
          className="h-8 w-[33px] rounded mr-2 flex justify-center items-center bg-[#0E76A8]"
          href={"www.linkedin.com"}
        >
          <FontAwesomeIcon className="text-white" icon={faLinkedin} />
        </Link>
      </div>
    </div>
  );
};
