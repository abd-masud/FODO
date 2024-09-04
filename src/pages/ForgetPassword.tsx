import { ForgetPasswordPage } from "@/components/SignInPage/ForgetPassword";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ForgetPassword() {
  return (
    <main>
      <ForgetPasswordPage />
    </main>
  );
}
