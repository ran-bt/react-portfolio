import logo from "../assets/Inran-Bent-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* nav menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-300}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-300}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} offset={-100}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-100} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamberger icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="about"
            smooth
            duration={500}
            offset={-300}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="skills"
            smooth={true}
            duration={500}
            offset={100}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="work"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://linkedin.com/in/inran-bent-8821b9133"
            >
              LinkedIn <SiLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://github.com/ran-bt"
              target="_blank "
              rel="noreferrer"
            >
              GitHub <SiGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="mailto:foo@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
