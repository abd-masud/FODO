import { BlogPage } from "@/components/BlogPage/BlogPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <main>
      <BlogPage />
    </main>
  );
}
