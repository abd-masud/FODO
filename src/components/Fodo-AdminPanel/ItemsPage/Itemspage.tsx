import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { ItemsContent } from "./ItemsContent";

export const ItemsPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <ItemsContent />
      </div>
    </main>
  );
};
