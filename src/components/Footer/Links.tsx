import { Address } from "./Address";
import { Information } from "./Information";
import { Account } from "./Account";
import { Help } from "./Help";
import { Categories } from "./Categories";

export const Links = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl m-auto grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-16 pb-12">
        <div className="col-span-2">
          <Address />
        </div>
        <div>
          <Information />
        </div>
        <div>
          <Account />
        </div>
        <div>
          <Help />
        </div>
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
};
