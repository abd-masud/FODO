import { SignInPage } from "@/components/SignInPage/SignIn";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  return (
    <main>
      <SignInPage />
    </main>
  );
}
