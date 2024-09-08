import Link from "next/link";

export const BreadCrumb = () => {
  return (
    <main className="bg-[url('/img/breadcrumb.jpg')] bg-cover bg-center w-full py-[70px]">
      <div className="max-w-screen-xl m-auto md:flex block items-center justify-between">
        <div className="text-[35px] font-bold text-white">Checkout</div>
        <div className="flex items-center">
          <Link className="text-white font-bold text-[15px]" href={"/"}>
            Home
          </Link>
          <div className="h-1 w-1 bg-[#CCCCCC] rounded-full mx-4"></div>
          <div className="text-[#CCCCCC] font-bold text-[15px]">Checkout</div>
        </div>
      </div>
    </main>
  );
};
