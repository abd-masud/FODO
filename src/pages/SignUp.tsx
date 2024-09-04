import { SignUpPage } from "@/components/SignInPage/SignUpPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  return (
    <main>
      <SignUpPage />
    </main>
  );
}
