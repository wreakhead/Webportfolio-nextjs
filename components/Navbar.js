import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">
        <ActiveLink activeClassName="logoActive" className="logo" href="/">
          <a>Imran</a>
        </ActiveLink>
      </h1>

      <ActiveLink activeClassName="menuActive" href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink activeClassName="menuActive" href="/about">
        <a>About</a>
      </ActiveLink>
      <ActiveLink activeClassName="menuActive" href="/projects">
        <a>Projects</a>
      </ActiveLink>
    </nav>
  );
};

export default Navbar;
