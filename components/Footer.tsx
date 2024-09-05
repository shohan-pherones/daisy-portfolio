import Link from "next/link";
import { navLinks } from "./Navbar";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <ul className="grid grid-flow-col gap-4">{navLinks}</ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/" target="_blank">
            <FaGithub size={24} />
          </Link>
          <Link href="/" target="_blank">
            <FaLinkedin size={24} />
          </Link>
          <Link href="/" target="_blank">
            <FaFacebook size={24} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Nishi
          Tabassum
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
