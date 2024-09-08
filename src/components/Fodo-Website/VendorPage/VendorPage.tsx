import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { VendorItems } from "./VendorItems";

export const VendorPage = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <VendorItems />
      <Footer />
    </main>
  );
};
