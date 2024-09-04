import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";

export const WishTable = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <section className="wishlist-page"></section>
    </main>
  );
};
