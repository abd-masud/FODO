import Link from "next/link";
import { useRouter } from "next/router";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  const linkClasses = (href: string) =>
    `text-[14px] py-[10px] px-6 bg-white rounded-lg my-1 text-black transition duration-300 ${
      pathname === href
        ? "bg-[#EDE7F6] text-[#673AB7]"
        : "hover:bg-[#EDE7F6] hover:text-[#673AB7]"
    }`;
  console.log(pathname);

  return (
    <main className="w-[260px] px-4 h-[calc(100vh-67px)] bg-white flex flex-col shadow">
      <p className="text-[14px] font-bold p-5">Dashboard</p>
      <Link
        href="/fodo-admin/Items/"
        className={linkClasses("/fodo-admin/Items/")}
      >
        <FontAwesomeIcon className="mr-5" icon={faBasketShopping} />
        Items
      </Link>
      <Link
        href="/fodo-admin/Vendors/"
        className={linkClasses("/fodo-admin/Vendors/")}
      >
        <FontAwesomeIcon className="mr-5" icon={faLayerGroup} />
        Vendors
      </Link>
      <Link
        href="/fodo-admin/Orders/"
        className={linkClasses("/fodo-admin/Orders/")}
      >
        <FontAwesomeIcon className="mr-5" icon={faListCheck} />
        Orders
      </Link>
      <Link
        href="/fodo-admin/Wishlist/"
        className={linkClasses("/fodo-admin/Wishlist/")}
      >
        <FontAwesomeIcon className="mr-5" icon={faHeart} />
        Wishlists
      </Link>
      <Link
        href="/fodo-admin/Users/"
        className={linkClasses("/fodo-admin/Users/")}
      >
        <FontAwesomeIcon className="mr-5" icon={faUsers} />
        Users
      </Link>
    </main>
  );
};
