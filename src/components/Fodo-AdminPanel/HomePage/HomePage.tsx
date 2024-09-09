import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { HomeContent } from "./HomeContent";

export const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <HomeContent />
      </div>
    </main>
  );
};
