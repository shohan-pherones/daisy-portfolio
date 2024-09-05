import { RESUME_DRIVE_LINK } from "@/constants/resume";
import Link from "next/link";

export const navLinks = (
  <>
    <li>
      <Link href="/#hero">Home</Link>
    </li>
    <li>
      <Link href="/#about">About</Link>
    </li>
    <li>
      <Link href="/#projects">Projects</Link>
    </li>
    <li>
      <Link href="/#skills">Skills</Link>
    </li>
    <li>
      <Link href="/#blogs">Blogs</Link>
    </li>
    <li>
      <Link href="/#contact">Contact</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* MOBILE */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Nishi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* DESKTOP */}
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link
          href={RESUME_DRIVE_LINK}
          target="_blank"
          className="btn btn-accent"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
