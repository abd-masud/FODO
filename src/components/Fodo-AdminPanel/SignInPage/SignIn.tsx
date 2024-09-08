import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import Link from "next/link";

export const SignIn = () => {
  return (
    <main>
      <div>
        <Image src={logo} height={35} width={100} alt={""} />
        <h1>Hi, Welcome Back</h1>
        <p>Enter your credentials to continue</p>
        <form action="">
          <div>
            <label htmlFor="email">Email Address / Username</label>
            <input className="block" type="text" name="" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="block" type="text" name="" id="password" />
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Keep me logged in</label>
            </div>
            <Link href={"/fodo-admin/ForgotPassword"}>Forgot password?</Link>
            <button>Sign In</button>
            <hr />
            <Link href={"/fodo-admin/SignUp"}>Don't have an account?</Link>
          </div>
        </form>
      </div>
    </main>
  );
};
