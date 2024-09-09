import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { VendorsContent } from "./VendorsContent";

export const VendorsPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <VendorsContent />
      </div>
    </main>
  );
};
