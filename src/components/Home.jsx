import React from "react";

import shivanshu from "../../public/shivanshu.png";

import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-[85vh] max-w-screen-2xl container mx-auto px-4 md:px-20 pt-22 md:pt-24 pb-14 md:pb-20"
      >
        <div className="home-fade-in relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] md:rounded-3xl shadow-[0_40px_80px_rgba(2,6,23,0.45)] border border-slate-700/70 p-5 sm:p-7 md:p-12">
          {/* Abstract Decorations */}
          <div className="home-float-slow pointer-events-none absolute -top-10 -left-6 h-40 w-40 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30 blur-xl" />
          <div className="home-float pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 opacity-30 blur-xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="home-fade-up home-delay-1 space-y-5 md:space-y-6 z-10">
              <p className="text-xs md:text-sm text-blue-300 font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
              <div className="text-[2rem] sm:text-[2.35rem] md:text-5xl font-black leading-[1.05] md:leading-[1.1] text-slate-100">
                <span>Hey, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Shivanshu</span>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-xl sm:text-2xl text-slate-200">a</span>
                  <ReactTyped
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-300"
                    strings={["Full Stack Developer", "MERN Developer", "Modern Web Builder"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-slate-300 md:text-lg leading-7 md:leading-loose">
                I build polished full-stack web experiences with React, Node.js, and thoughtful interface design, focused on products that feel modern, reliable, and ready for real users.
              </p>
            </div>

            <div className="home-fade-up home-delay-2 relative z-10 flex justify-center md:justify-end md:pr-3 pt-1 md:pt-0">
              <div className="relative group home-photo-pop">
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-300/40 via-indigo-300/30 to-cyan-200/40 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-[1.8rem] bg-white/85 backdrop-blur-sm border border-white/80 shadow-[0_16px_36px_rgba(15,23,42,0.24)]"></div>
                <div className="absolute inset-2 rounded-[1.4rem] border border-slate-300/80"></div>
                <img
                  src={shivanshu}
                  alt="Shivanshu Gupta"
                  fetchPriority="high"
                  decoding="async"
                  className="relative rounded-[1.5rem] w-[15rem] h-[18rem] sm:w-[18rem] sm:h-[21rem] md:w-80 md:h-96 object-cover object-top border border-white/60 shadow-[0_14px_30px_rgba(15,23,42,0.22)] group-hover:-translate-y-1 group-hover:scale-[1.02] transition-all duration-300"
                  style={{
                    filter: "contrast(1.08) brightness(1.04) saturate(1.03)",
                    imageRendering: "auto",
                  }}
                />
                <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.32),rgba(255,255,255,0.02)_44%,transparent_60%)] pointer-events-none"></div>
              </div>
            </div>
          </div>

            <div className="home-fade-up home-delay-3 mt-6 md:mt-8 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-3">
              <a href="mailto:rajkishoregupta716@gmail.com" className="inline-flex min-h-12 items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                Contact Me
              </a>
              <a
                href="/Shivanshu_Gupta_Internship_Resume-1.pdf"
                download="Shivanshu-Gupta-Resume.pdf"
                className="inline-flex min-h-12 items-center justify-center border border-cyan-400/50 bg-cyan-400/10 text-cyan-200 font-semibold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/10 hover:bg-cyan-400/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </a>
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center sm:col-span-2 xl:col-span-1 border border-slate-500 text-slate-100 font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Work
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/shivanshugupta456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500 bg-slate-900/70 text-slate-100 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-800 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivanshu-gupta-5122193aa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-400 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <div className="flex flex-wrap gap-3 sm:ml-1">
                <span className="home-chip home-delay-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs">React</span>
                <span className="home-chip home-delay-3 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-xs">Node.js</span>
                <span className="home-chip home-delay-4 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs">Tailwind</span>
                <span className="home-chip home-delay-5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-200 text-xs">JWT</span>
              </div>
            </div>
          </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 z-10">
              <div className="home-fade-up home-delay-3 h-full p-5 md:p-6 bg-white/95 border border-slate-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-xs uppercase tracking-wide text-sky-600 font-bold">Featured Work</p>
                <h3 className="text-xl font-semibold text-slate-900">5 Polished Projects</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Real-world builds across learning, communication, content, and productivity experiences.</p>
              </div>
              <div className="home-fade-up home-delay-4 h-full p-5 md:p-6 bg-white/95 border border-slate-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-xs uppercase tracking-wide text-sky-600 font-bold">Focus Areas</p>
                <h3 className="text-xl font-semibold text-slate-900">MERN + Product UI</h3>
                <p className="text-gray-600 text-sm leading-relaxed">From clean frontend systems to robust backend flows, I build applications that balance usability and performance.
                </p>
              </div>
          </div>
        </div>
      </div>

      <hr className="mt-8 md:mt-10 border-slate-700/70" />
      <style>{`
        .home-fade-in {
          animation: homeFadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .home-fade-up {
          opacity: 0;
          animation: homeFadeUp 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .home-delay-1 { animation-delay: 120ms; }
        .home-delay-2 { animation-delay: 220ms; }
        .home-delay-3 { animation-delay: 320ms; }
        .home-delay-4 { animation-delay: 420ms; }
        .home-delay-5 { animation-delay: 520ms; }
        .home-photo-pop {
          animation: homePhotoPop 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 220ms;
        }
        .home-float {
          animation: homeFloat 7s ease-in-out infinite;
        }
        .home-float-slow {
          animation: homeFloatSlow 10s ease-in-out infinite;
        }
        .home-chip {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .home-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.18);
        }
        @keyframes homeFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes homeFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes homePhotoPop {
          from { opacity: 0; transform: translateY(22px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes homeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-8px, -8px, 0); }
        }
        @keyframes homeFloatSlow {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(8px, -10px, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .home-fade-in,
          .home-fade-up,
          .home-photo-pop,
          .home-float,
          .home-float-slow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
