import React, { useState } from "react";
import pic from "../../public/shivanshu.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Testimonials",
    },
    {
      id: 6,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-full fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-700/70 shadow-[0_12px_30px_rgba(2,6,23,0.35)]">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-[4.5rem] md:h-16">
          <div className="flex justify-between items-center h-[4.5rem] md:h-16 gap-3">
            {/* Logo & Brand */}
            <div className="flex min-w-0 space-x-3 items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur opacity-45 group-hover:opacity-70 transition duration-300"></div>
                <img src={pic} className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-cyan-400/80" alt="Profile" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate font-bold text-base md:text-lg text-slate-100 tracking-tight">
                  Shivanshu <span className="text-cyan-300">Gupta</span>
                </h1>
                <p className="truncate text-[11px] md:text-xs text-slate-400 font-medium">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <ul className="flex space-x-1">
                {navItems.map(({ id, text }) => (
                  <li key={id}>
                    <Link
                      to={text}
                      spy={true}
                      activeClass="nav-active"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="nav-link px-4 py-2 rounded-lg text-slate-200 font-medium text-sm hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/shivanshugupta456"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-200 hover:border-slate-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivanshu-gupta-5122193aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
              <a
                href="/Shivanshu_Gupta_Internship_Resume-1.pdf"
                download="Shivanshu-Gupta-Resume.pdf"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenu(!menu)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 hover:bg-white/10 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {menu ? (
                  <IoCloseSharp size={28} className="text-slate-100" />
                ) : (
                  <AiOutlineMenu size={28} className="text-slate-100" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className="md:hidden border-t border-slate-700 bg-slate-950/95 animate-in fade-in duration-300">
            <ul className="flex flex-col space-y-2 px-4 pb-5 pt-4">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    spy={true}
                    activeClass="nav-active-mobile"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="nav-link-mobile block rounded-xl border border-transparent px-4 py-3 text-slate-200 font-medium hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Shivanshu_Gupta_Internship_Resume-1.pdf"
                  download="Shivanshu-Gupta-Resume.pdf"
                  onClick={() => setMenu(false)}
                  className="block rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
                >
                  Download Resume
                </a>
              </li>
              <li className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/shivanshugupta456"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenu(false)}
                  className="block rounded-xl border border-slate-600 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition-all duration-300 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shivanshu-gupta-5122193aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenu(false)}
                  className="block rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <style>{`
        .nav-active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }
        .nav-active::after {
          transform: scaleX(1);
        }
        .nav-active-mobile {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(103, 232, 249, 0.35);
        }
      `}</style>
    </>
  );
}

export default Navbar;
