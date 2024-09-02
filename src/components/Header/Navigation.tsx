import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const Navigation = () => {
  return (
    <div className="bg-white">
      <Navbar
        className="max-w-screen-xl m-auto flex items-center"
        style={{ padding: 0 }}
      >
        <NavbarBrand as={Link} href="/">
          <Image src={logo} alt="Logo" height={35} width={100} />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="#">
            Shop
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            Vendor
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="#"
            className="shadow h-[45px] w-[45px] flex justify-center items-center bg-white hover:bg-[#7BAE00] text-black hover:text-white transition"
          >
            <FontAwesomeIcon className="text-inherit" icon={faCartShopping} />
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            Vendor
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            Vendor
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};
