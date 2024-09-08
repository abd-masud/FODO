import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { ShopItems } from "./ShopItems";

export const ShopPage = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <ShopItems />
      <Footer />
    </main>
  );
};
