import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { UsersContent } from "./UsersContent";

export const UsersPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <UsersContent />
      </div>
    </main>
  );
};
