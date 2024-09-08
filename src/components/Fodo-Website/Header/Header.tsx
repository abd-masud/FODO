import { Contract } from "./Contract";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <Contract />
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
    </>
  );
};
