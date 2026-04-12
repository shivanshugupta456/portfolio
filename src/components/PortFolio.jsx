import React from "react";
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
import {
  SiJavascript,
  SiTailwindcss,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiWebrtc,
} from "react-icons/si";

function PortFolio() {
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
      description:
        "A focused course platform built to make discovering learning content simple, clear, and easy to navigate for modern learners.",
      challenge:
        "Browsing educational content can feel cluttered when the interface is overloaded or difficult to scan.",
      solution:
        "Designed a streamlined course discovery flow with a clean layout, simple navigation, and clear visual hierarchy.",
      features: [
        "Course discovery interface",
        "Clean responsive navigation",
        "Learner-friendly browsing flow",
      ],
      impact:
        "Improved the learning experience with a streamlined content layout that makes exploring courses feel fast and intuitive.",
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
      description:
        "An interactive virtual classroom experience built for live teaching, instant communication, and collaborative online learning.",
      challenge:
        "Remote classes often feel disconnected when teaching, messaging, and collaboration happen in separate tools.",
      solution:
        "Combined live sessions, chat, and whiteboard collaboration into one unified classroom experience.",
      features: [
        "Real-time video sessions",
        "Live chat with moderation",
        "Collaborative whiteboard tools",
      ],
      impact:
        "Made remote classes feel more engaging by combining live interaction, communication, and collaboration in one workflow.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Vercel",
      ],
      liveLink: "https://live-class-fedg.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/live-class.git",
      image: liveClassThumb,
      icon: FaChalkboardTeacher,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      id: 3,
      name: "NoteTaking App",
      description:
        "A polished notes workspace designed to make writing, reviewing, and organizing ideas feel clean, fast, and presentation-ready.",
      challenge:
        "Many note tools feel busy and make simple writing or review flows slower than they should be.",
      solution:
        "Built a dashboard-first workspace with quick note actions and a cleaner reading and editing experience.",
      features: [
        "Structured note dashboard",
        "Create, edit, and delete flows",
        "Clean responsive workspace UI",
      ],
      impact:
        "Made everyday note management feel more professional with a dashboard-first layout and frictionless editing experience.",
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
      description:
        "A modern blogging experience crafted for writing, publishing, and reading content through a clean and approachable interface.",
      challenge:
        "Content platforms lose readability when publishing and reading flows are not balanced around the user experience.",
      solution:
        "Created a lightweight blog interface that keeps writing, publishing, and reading simple and approachable.",
      features: [
        "Create and publish articles",
        "Responsive reading layout",
        "Smooth content browsing flow",
      ],
      impact:
        "Improved content sharing with a polished reading experience that feels lightweight, readable, and easy to explore.",
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
      description:
        "A sleek real-time chat platform focused on smooth conversations, presence-aware contact lists, and a modern messaging interface.",
      challenge:
        "Messaging products feel weak when conversations, presence, and contact management do not stay visually connected.",
      solution:
        "Built a real-time chat workspace with an active contact sidebar and a focused conversation-first layout.",
      features: [
        "Real-time messaging flow",
        "Active contact sidebar",
        "Responsive conversation workspace",
      ],
      impact:
        "Improved the chat experience with a cleaner communication layout that feels fast, focused, and easy to use across devices.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveLink: "https://chat-app-psi-fawn-46.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/ChatApp.git",
      image: chatAppThumb,
      icon: FaComments,
      gradient: "from-fuchsia-500 to-pink-600",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-10"
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/45 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-md md:rounded-3xl sm:p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.42em] text-cyan-300/80">
              Featured Projects
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-50 md:text-4xl">
              Premium builds with real product intent.
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              A curated set of projects where interface quality, user flow, and
              full-stack implementation come together in a cleaner, more professional
              presentation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:w-fit">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-4 shadow-lg shadow-slate-950/25">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Projects</p>
              <p className="mt-2 text-2xl font-black text-white">{projects.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-4 shadow-lg shadow-slate-950/25">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Focus</p>
              <p className="mt-2 text-2xl font-black text-white">MERN</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-7 grid grid-cols-1 gap-5 md:mt-8 md:gap-6 lg:grid-cols-3">
          {projects.map((project, projectIndex) => {
            const ProjectIcon = project.icon;
            const isFeatured = projectIndex === 0;

            return (
              <article
                className={`group overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.92))] shadow-[0_24px_60px_rgba(2,6,23,0.34)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_36px_90px_rgba(8,145,178,0.18)] ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
                key={project.id}
              >
                <div className={`grid ${isFeatured ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
                  <div
                    className={`relative overflow-hidden bg-slate-950 ${
                      isFeatured
                        ? "h-72 border-b border-slate-700/70 lg:h-full lg:min-h-[30rem] lg:border-b-0 lg:border-r"
                        : "h-56 border-b border-slate-700/70"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/82 px-3 py-3 backdrop-blur-md sm:px-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">
                        {isFeatured ? "Flagship Build" : "Live Preview"}
                      </span>
                    </div>

                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.08)_34%,rgba(2,6,23,0.84)_100%)]" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 mix-blend-screen`}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-4">
                      <div className="max-w-[78%] rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 shadow-lg shadow-slate-950/30 backdrop-blur-xl">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-300/90">
                          Featured Build
                        </p>
                        <h2 className="text-xl font-black text-white md:text-2xl">
                          {project.name}
                        </h2>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-slate-950/78 shadow-lg shadow-slate-950/30 backdrop-blur-xl sm:h-14 sm:w-14">
                        <ProjectIcon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                          {isFeatured ? "Premium Case Study" : "Case Study"}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-100">
                          {project.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-slate-600/80 bg-slate-800/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                        {project.techStack.length} technologies
                      </span>
                    </div>

                    <p className="mb-4 leading-relaxed text-slate-300">{project.description}</p>

                    <div className={`mb-4 grid gap-3 ${isFeatured ? "xl:grid-cols-2" : ""}`}>
                      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <h4 className="mb-1 text-sm font-semibold text-slate-200">Problem</h4>
                        <p className="text-sm leading-relaxed text-slate-300">{project.challenge}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <h4 className="mb-1 text-sm font-semibold text-slate-200">Solution</h4>
                        <p className="text-sm leading-relaxed text-slate-300">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                      <h4 className="mb-3 text-sm font-semibold text-slate-200">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                      <h4 className="mb-1 text-sm font-semibold text-cyan-200">Outcome</h4>
                      <p className="text-sm leading-relaxed text-slate-300">{project.impact}</p>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-2 font-semibold text-slate-200">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => {
                          const TechIcon = techIcons[tech];

                          return (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-100"
                            >
                              {TechIcon ? <TechIcon size={12} /> : null}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
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
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default PortFolio;
