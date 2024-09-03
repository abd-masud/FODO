import { VendorPage } from "@/components/VendorPage/VendorPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Vendor() {
  return (
    <main>
      <VendorPage />
    </main>
  );
}
