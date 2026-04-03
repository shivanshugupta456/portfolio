import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-[85vh] max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 rounded-3xl shadow-[0_40px_80px_rgba(34,197,94,0.12)] border border-slate-200 p-8 md:p-12">
          {/* Abstract Decorations */}
          <div className="pointer-events-none absolute -top-10 -left-6 h-40 w-40 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30 blur-xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 opacity-30 blur-xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5 z-10">
              <p className="text-xs md:text-sm text-blue-700 font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
              <div className="text-3xl md:text-5xl font-black leading-tight">
                <span>Hey, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Shivanshu</span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl">a</span>
                  <ReactTyped
                    className="text-2xl md:text-4xl font-bold text-blue-800"
                    strings={["Full Stack Developer", "React Developer", "MERN Expert"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
              </div>
              <p className="text-gray-700 md:text-lg leading-relaxed md:leading-loose">
                I build scalable and user-centric web experiences using React, Node.js and modern UI patterns. My goal is to ship clean and performant applications with pixel-perfect design.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#Contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300">
                  Contact Me
                </a>
                <a href="#Portfolio" className="inline-flex items-center justify-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition-all duration-300">
                  Explore Work
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">React</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs">Tailwind</span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs">JWT</span>
              </div>
            </div>

            <div className="relative z-10 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-white shadow-2xl overflow-hidden">
                <img src={pic} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),rgba(129,140,248,0.2),transparent)]" />
                <div className="absolute bottom-3 right-3 border border-white text-xs text-white px-3 py-1 rounded-full bg-blue-700/80 backdrop-blur-sm">Full Stack</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-xs uppercase tracking-wide text-sky-600 font-bold">Publications</p>
              <h3 className="text-xl font-semibold text-slate-900">5+ Live Projects</h3>
              <p className="text-gray-600 text-sm">Rich experiences built with real-time communication, secure auth, and responsive UI.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-xs uppercase tracking-wide text-sky-600 font-bold">Focus Areas</p>
              <h3 className="text-xl font-semibold text-slate-900">MERN + Modern UI</h3>
              <p className="text-gray-600 text-sm">From clean interface to robust API design, I deliver production-grade applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-slate-200" />
    </>
  );
}

export default Home;
