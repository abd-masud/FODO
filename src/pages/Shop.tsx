import { ShopPage } from "@/components/ShopPage/ShopPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Shop() {
  return (
    <main>
      <ShopPage />
    </main>
  );
}
