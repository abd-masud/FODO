import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { CartTable } from "./CartTable";

export const CartPage = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <CartTable />
      <Footer />
    </main>
  );
};
