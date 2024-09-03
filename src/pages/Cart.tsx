import { CartPage } from "@/components/CartPage/CartPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {
  return (
    <main>
      <CartPage />
    </main>
  );
}
