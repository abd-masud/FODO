import { WishlistPage } from "@/components/WishlistPage/WishlistPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {
  return (
    <main>
      <WishlistPage />
    </main>
  );
}
