import { HomePage } from "@/components/HomePage/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
