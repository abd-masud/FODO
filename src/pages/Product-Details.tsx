import { ProductPage } from "@/components/ProductPage/ProductPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Product() {
  return (
    <main>
      <ProductPage />
    </main>
  );
}
