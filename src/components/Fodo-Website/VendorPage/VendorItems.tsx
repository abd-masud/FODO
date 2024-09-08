import { VendorLeft } from "./VendorLeft";
import { VendorRight } from "./VendorRight";

export const VendorItems = () => {
  return (
    <div className="bg-[#F2F3F9]">
      <div className="max-w-screen-xl m-auto grid grid-cols-3 py-24 gap-6">
        <div className="col-span-2">
          <VendorLeft />
        </div>
        <div>
          <VendorRight />
        </div>
      </div>
    </div>
  );
};
