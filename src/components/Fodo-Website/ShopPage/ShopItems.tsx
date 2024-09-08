import { ShopRight } from "./ShopRight";
import { ShopLeft } from "./ShopLeft";

export const ShopItems = () => {
  return (
    <div className="bg-[#F2F3F9]">
      <div className="max-w-screen-xl m-auto grid grid-cols-3 py-24 gap-6">
        <div className="col-span-2">
          <ShopLeft />
        </div>
        <div>
          <ShopRight />
        </div>
      </div>
    </div>
  );
};
