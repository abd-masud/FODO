import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Category } from "./Category";
import { HomeSlider } from "./HomeSlider";

export const HomePage = () => {
  return (
    <main>
      <Header />
      <HomeSlider />
      <Category />
      <Footer />
    </main>
  );
};
