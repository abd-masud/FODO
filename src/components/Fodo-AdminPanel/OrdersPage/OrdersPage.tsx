import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { OrdersContent } from "./OrdersContent";

export const OrdersPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <OrdersContent />
      </div>
    </main>
  );
};
