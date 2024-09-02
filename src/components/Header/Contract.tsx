import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Link from "next/link";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const Contract = () => {
  return (
    <main>
      <div className="bg-[#0B2B3C] py-[10px]">
        <div className="max-w-screen-xl m-auto px-5 xl:px-0">
          <div className="flex md:justify-between justify-center">
            <div className="flex">
              <div className="flex items-center">
                <FontAwesomeIcon className="text-[#7BAE00]" icon={faEnvelope} />
                <p className="text-white ml-1">info12@example.com</p>
              </div>
              <div className="flex items-center ml-5">
                <FontAwesomeIcon
                  className="text-[#7BAE00]"
                  icon={faLocationDot}
                />
                <p className="text-white ml-1 inline">
                  California, TX{" "}
                  <span className="sm:inline-block hidden"> 70240</span>
                </p>
              </div>
            </div>

            <div className="md:block hidden">
              <div className="flex items-center">
                <Link
                  href={"www.facebook.com"}
                  className="mx-2 text-white hover:text-[#7BAE00] transition cursor-pointer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link
                  href={"www.twitter.com"}
                  className="mx-2 text-white hover:text-[#7BAE00] transition cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  href={"www.instagram.com"}
                  className="mx-2 text-white hover:text-[#7BAE00] transition cursor-pointer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href={"www.vimeo.com"}
                  className="mx-2 text-white hover:text-[#7BAE00] transition cursor-pointer"
                >
                  <FontAwesomeIcon icon={faVimeoV} />
                </Link>
                <div className="text-white ml-10">
                  English
                  <FontAwesomeIcon
                    className="text-[#7BAE00] ml-2 text-[14px]"
                    icon={faArrowDownLong}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
