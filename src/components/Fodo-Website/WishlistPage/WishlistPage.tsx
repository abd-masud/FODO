import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { WishlistTable } from "./WishlistTable";

export const WishlistPage = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <WishlistTable />
      <Footer />
    </main>
  );
};
