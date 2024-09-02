import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Category } from "./Category";
import { Slider } from "./Slider";

export const HomePage = () => {
  return (
    <main>
      <Header />
      <Slider />
      <Category />
      <Footer />
    </main>
  );
};
