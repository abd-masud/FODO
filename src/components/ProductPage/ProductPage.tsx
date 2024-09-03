import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { Description } from "./Desciption";
import { ProductInfo } from "./ProductInfo";
import { Related } from "./Related";

export const ProductPage = () => {
  return (
    <main className="bg-[#F2F3F9]">
      <Header />
      <BreadCrumb />
      <ProductInfo />
      <Description />
      <Related />
      <Footer />
    </main>
  );
};
