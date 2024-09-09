import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { WishlistContent } from "./WishlistContent";

export const WishlistPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <WishlistContent />
      </div>
    </main>
  );
};
