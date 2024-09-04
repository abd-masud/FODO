import { CheckoutPage } from "@/components/CheckoutPage/CheckoutPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Checkout() {
  return (
    <main>
      <CheckoutPage />
    </main>
  );
}
