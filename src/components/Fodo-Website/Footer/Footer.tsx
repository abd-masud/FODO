import { Links } from "./Links";
import { Copyright } from "./Copyright";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <Links />
      <Copyright />
    </footer>
  );
};
