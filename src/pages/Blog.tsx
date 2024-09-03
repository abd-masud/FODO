import { Blog } from "@/components/HomePage/Blog";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Blog />
    </main>
  );
}
