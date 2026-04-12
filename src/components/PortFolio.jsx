import React, { useMemo, useState } from "react";
import courseAppThumb from "../../public/courseapp-thumb.png";
import liveClassThumb from "../../public/live-class-thumb.png";
import noteTakingThumb from "../../public/notetaking-thumb.png";
import blogThumb from "../../public/blog-thumb.png";
import chatAppThumb from "../../public/chatapp-thumb.png";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaStickyNote,
  FaPenNib,
  FaComments,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVercel, SiExpress, SiMongodb, SiSocketdotio, SiWebrtc } from "react-icons/si";

function PortFolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const techIcons = {
    "React.js": FaReact,
    JavaScript: SiJavascript,
    "Tailwind CSS": SiTailwindcss,
    Vercel: SiVercel,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    "Socket.io": SiSocketdotio,
    WebRTC: SiWebrtc,
  };

  const projects = [
    {
      id: 1,
      name: "CourseApp",
      description: "A focused course platform built to make discovering learning content simple, clear, and easy to navigate for modern learners.",
      challenge: "Browsing educational content can feel cluttered when the interface is overloaded or difficult to scan.",
      solution: "Designed a streamlined course discovery flow with a clean layout, simple navigation, and clear visual hierarchy.",
      features: ["Course discovery interface", "Clean responsive navigation", "Learner-friendly browsing flow"],
      impact: "Improved the learning experience with a streamlined content layout that makes exploring courses feel fast and intuitive.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://courseapp-kohl.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/courseapp.git",
      image: courseAppThumb,
      icon: FaBookOpen,
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Live Class",
      description: "An interactive virtual classroom experience built for live teaching, instant communication, and collaborative online learning.",
      challenge: "Remote classes often feel disconnected when teaching, messaging, and collaboration happen in separate tools.",
      solution: "Combined live sessions, chat, and whiteboard collaboration into one unified classroom experience.",
      features: ["Real-time video sessions", "Live chat with moderation", "Collaborative whiteboard tools"],
      impact: "Made remote classes feel more engaging by combining live interaction, communication, and collaboration in one workflow.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Vercel"],
      liveLink: "https://live-class-fedg.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/live-class.git",
      image: liveClassThumb,
      icon: FaChalkboardTeacher,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      id: 3,
      name: "NoteTaking App",
      description: "A polished notes workspace designed to make writing, reviewing, and organizing ideas feel clean, fast, and presentation-ready.",
      challenge: "Many note tools feel busy and make simple writing or review flows slower than they should be.",
      solution: "Built a dashboard-first workspace with quick note actions and a cleaner reading and editing experience.",
      features: ["Structured note dashboard", "Create, edit, and delete flows", "Clean responsive workspace UI"],
      impact: "Made everyday note management feel more professional with a dashboard-first layout and frictionless editing experience.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://notetakingapp-chi.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/notetakingapp.git",
      image: noteTakingThumb,
      icon: FaStickyNote,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      name: "Blog App",
      description: "A modern blogging experience crafted for writing, publishing, and reading content through a clean and approachable interface.",
      challenge: "Content platforms lose readability when publishing and reading flows are not balanced around the user experience.",
      solution: "Created a lightweight blog interface that keeps writing, publishing, and reading simple and approachable.",
      features: ["Create and publish articles", "Responsive reading layout", "Smooth content browsing flow"],
      impact: "Improved content sharing with a polished reading experience that feels lightweight, readable, and easy to explore.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://blog-app-psi-rust-36.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/blog-app.git",
      image: blogThumb,
      icon: FaPenNib,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      name: "Chat App",
      description: "A sleek real-time chat platform focused on smooth conversations, presence-aware contact lists, and a modern messaging interface.",
      challenge: "Messaging products feel weak when conversations, presence, and contact management do not stay visually connected.",
      solution: "Built a real-time chat workspace with an active contact sidebar and a focused conversation-first layout.",
      features: ["Real-time messaging flow", "Active contact sidebar", "Responsive conversation workspace"],
      impact: "Improved the chat experience with a cleaner communication layout that feels fast, focused, and easy to use across devices.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveLink: "https://chat-app-psi-fawn-46.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/ChatApp.git",
      image: chatAppThumb,
      icon: FaComments,
      gradient: "from-fuchsia-500 to-pink-600",
    },
  ];

  const totalProjects = projects.length;
  const wrappedIndex = useMemo(
    () => (activeIndex + totalProjects) % totalProjects,
    [activeIndex, totalProjects]
  );

  const goTo = (nextIndex) => {
    setActiveIndex((nextIndex + totalProjects) % totalProjects);
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-10"
    >
      <div className="rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-blue-300/80">What I&apos;ve Built</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">My Projects</h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            A focused carousel of full-stack builds, with each project spotlighted in the center.
          </p>
        </div>

        <div className="relative mt-8 md:mt-10">
          <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-10 h-36 w-36 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative overflow-hidden">
            <div className="relative h-[520px] sm:h-[520px] md:h-[540px] lg:h-[560px] [perspective:1200px]">
              {projects.map((project, index) => {
                const ProjectIcon = project.icon;
                const offset = index - wrappedIndex;
                const isActive = index === wrappedIndex;
                const clampedOffset = Math.max(-2, Math.min(2, offset));
                const translateX = clampedOffset * 85;
                const scale = isActive ? 1 : 0.86;
                const opacity = Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.55;
                const rotateY = clampedOffset * -12;
                const zIndex = isActive ? 30 : 10 - Math.abs(offset);

                return (
                  <div
                    key={project.id}
                    className="absolute left-1/2 top-1/2 w-[82%] sm:w-[64%] md:w-[46%] lg:w-[34%] transition-all duration-500"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity,
                      zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`group overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-900/95 shadow-[0_24px_60px_rgba(2,6,23,0.34)] transition-all duration-500 ${
                        isActive
                          ? "hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_36px_90px_rgba(8,145,178,0.18)]"
                          : "scale-[0.98] blur-[0.3px]"
                      }`}
                    >
                      <div className="relative h-48 sm:h-52 overflow-hidden border-b border-slate-700/70 bg-slate-950">
                        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/85 px-3 py-3 sm:px-4 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                          </div>
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                            Live Preview
                          </span>
                        </div>
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06] brightness-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.12)_38%,rgba(2,6,23,0.6)_100%)]" />
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-16 mix-blend-screen`} />
                        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-3 sm:p-4">
                          <div className="max-w-[78%] rounded-2xl border border-white/10 bg-slate-950/78 px-4 py-3 shadow-lg shadow-slate-950/30 backdrop-blur-xl">
                            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-300/90">Featured Build</p>
                            <h2 className="text-lg font-bold text-white md:text-xl">
                              {project.name}
                            </h2>
                          </div>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-slate-950/78 shadow-lg shadow-slate-950/30 backdrop-blur-xl sm:h-14 sm:w-14">
                            <ProjectIcon className="text-white" size={24} />
                          </div>
                        </div>
                      </div>

                      <div className="p-5 md:p-6">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <h3 className="font-bold text-xl text-slate-100">{project.name}</h3>
                          <span className="rounded-full border border-slate-600/80 bg-slate-800/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                            Case Study
                          </span>
                        </div>
                        <p className="mb-3 leading-relaxed text-slate-300 line-clamp-3">{project.description}</p>

                        {isActive ? (
                          <>
                            <div className="mb-4 grid gap-3">
                              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                                <h4 className="mb-1 text-sm font-semibold text-slate-200">Problem</h4>
                                <p className="text-sm leading-relaxed text-slate-300 line-clamp-2">{project.challenge}</p>
                              </div>
                              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                                <h4 className="mb-1 text-sm font-semibold text-slate-200">Solution</h4>
                                <p className="text-sm leading-relaxed text-slate-300 line-clamp-2">{project.solution}</p>
                              </div>
                            </div>

                            <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                              <h4 className="mb-2 text-sm font-semibold text-slate-200">Key Features</h4>
                              <ul className="list-disc list-inside text-sm text-slate-300">
                                {project.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-4">
                              <h4 className="mb-1 text-sm font-semibold text-slate-200">Outcome</h4>
                              <p className="text-slate-300 text-sm">{project.impact}</p>
                            </div>
                          </>
                        ) : (
                          <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                            <h4 className="mb-2 text-sm font-semibold text-slate-200">Snapshot</h4>
                            <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
                              {project.challenge}
                            </p>
                          </div>
                        )}

                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-200 mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => {
                              const TechIcon = techIcons[tech];
                              return (
                                <span
                                  key={techIndex}
                                  className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full"
                                >
                                  {TechIcon ? <TechIcon size={12} /> : null}
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-xl border border-slate-600 bg-slate-800/90 px-4 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-700"
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(wrappedIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-200 transition-all duration-300 hover:border-cyan-400/60 hover:text-white"
            aria-label="Previous project"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={() => goTo(wrappedIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-200 transition-all duration-300 hover:border-cyan-400/60 hover:text-white"
            aria-label="Next project"
          >
            &#8250;
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === wrappedIndex ? "w-6 bg-cyan-300" : "w-2.5 bg-slate-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
