import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BreadCrumb } from "./Breadcrumb";
import { CheckoutForms } from "./CheckoutForms";

export const CheckoutPage = () => {
  return (
    <main>
      <Header />
      <BreadCrumb />
      <CheckoutForms />
      <Footer />
    </main>
  );
};
