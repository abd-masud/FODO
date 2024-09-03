import { ShopPage } from "@/components/ShopPage/ShopPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ShopPage />
    </main>
  );
}
