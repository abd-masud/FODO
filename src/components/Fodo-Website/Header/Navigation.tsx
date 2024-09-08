import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import logo from "../../../../public/img/logo.png";

export const Navigation = () => {
  const [isHoveredShop, setIsHoveredShop] = useState(false);
  const [isHoveredVendor, setIsHoveredVendor] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);
  const [isHoveredWishlist, setIsHoveredWishlist] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  return (
    <div className="bg-white border-b shadow-lg border-[#F2F3F9] py-8 px-6">
      <Navbar
        className="max-w-screen-xl m-auto flex items-center"
        style={{ padding: 0 }}
      >
        <NavbarBrand as={Link} href="/">
          <Image src={logo} alt="Logo" height={35} width={100} />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            style={{
              color: isHoveredShop ? "#7BAE00" : "black",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setIsHoveredShop(true)}
            onMouseLeave={() => setIsHoveredShop(false)}
            as={Link}
            href="/fodo-web/Shop"
          >
            <style jsx>{`
              NavbarLink:hover {
                color: #7bae00;
              }
            `}</style>
            Shop
          </NavbarLink>
          <NavbarLink
            style={{
              color: isHoveredVendor ? "#7BAE00" : "black",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setIsHoveredVendor(true)}
            onMouseLeave={() => setIsHoveredVendor(false)}
            as={Link}
            href="/fodo-web/Vendor"
          >
            Vendor
          </NavbarLink>
          <NavbarLink
            style={{
              color: isHoveredCart ? "#7BAE00" : "black",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setIsHoveredCart(true)}
            onMouseLeave={() => setIsHoveredCart(false)}
            as={Link}
            href="/fodo-web/Cart"
          >
            Cart
          </NavbarLink>
          <NavbarLink
            style={{
              color: isHoveredWishlist ? "#7BAE00" : "black",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setIsHoveredWishlist(true)}
            onMouseLeave={() => setIsHoveredWishlist(false)}
            as={Link}
            href="/fodo-web/Wishlist"
          >
            Wishlist
          </NavbarLink>
          <NavbarLink
            style={{
              color: isHoveredLogin ? "#7BAE00" : "black",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setIsHoveredLogin(true)}
            onMouseLeave={() => setIsHoveredLogin(false)}
            as={Link}
            href="/fodo-web/SignIn"
          >
            Sign In
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};
