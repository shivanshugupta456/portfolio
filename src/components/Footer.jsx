import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const quickLinks = ["Home", "About", "Portfolio", "Experiance", "Contact"];

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-700/70 bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.9fr_1fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Shivanshu Gupta</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Building modern web experiences with clean code and thoughtful UI.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Full Stack Developer focused on responsive frontend interfaces, scalable backend integration, and polished digital products that feel reliable and professional.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rajkishoregupta716@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Let&apos;s Connect
                <FaArrowRight size={14} />
              </a>
              <a
                href="/Shivanshu_Gupta_Internship_Resume-1.pdf"
                download="Shivanshu-Gupta-Resume.pdf"
                className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer transition-colors duration-300 hover:text-white"
                  >
                    {item === "Experiance" ? "Experience" : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <p className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5 text-cyan-300" />
                <a href="mailto:rajkishoregupta716@gmail.com" className="transition-colors duration-300 hover:text-white">
                  rajkishoregupta716@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <FaMobileAlt className="mt-0.5 text-cyan-300" />
                <a href="tel:+919368220357" className="transition-colors duration-300 hover:text-white">
                  +91 9368220357
                </a>
              </p>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 text-cyan-300" />
                <span>Firozabad, Uttar Pradesh, India</span>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/shivanshugupta456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivanshu-gupta-5122193aa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Shivanshu Gupta. All rights reserved.</p>
          <p>Designed and developed with React, Tailwind CSS, and a focus on modern user experience.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
