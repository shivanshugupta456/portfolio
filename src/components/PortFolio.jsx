import React from "react";
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
      description: "Course discovery and learning platform where users can browse, access, and manage educational content.",
      features: ["Course listing and navigation", "Clean responsive UI", "Learner-friendly flow"],
      impact: "Improved access to structured learning content with a fast and simple course browsing experience.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://courseapp-kohl.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/courseapp.git",
      icon: FaBookOpen,
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Live Class",
      description: "Interactive online learning platform with video streaming, chat, and collaborative whiteboard.",
      features: ["Real-time video conferencing", "Live chat with moderation", "Collaborative whiteboard"],
      impact: "Boosted remote learning engagement by delivering smooth real-time interactions and collaboration.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC"],
      liveLink: "https://live-class-fedg.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/live-class.git",
      icon: FaChalkboardTeacher,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      id: 3,
      name: "NoteTaking App",
      description: "A productivity-focused note management app to create, organize, and maintain notes efficiently.",
      features: ["Create and manage notes", "Simple and responsive interface", "Fast note access workflow"],
      impact: "Helped streamline daily note organization with a clean UI and quick interaction flow.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://notetakingapp-chi.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/notetakingapp.git",
      icon: FaStickyNote,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      name: "Blog App",
      description: "A modern blogging platform to create, publish, and explore articles with a clean reading experience.",
      features: ["Create and publish blog posts", "Responsive reading interface", "User-friendly content flow"],
      impact: "Enabled smooth content sharing and improved reading experience with a clean and scalable UI.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://blog-app-psi-rust-36.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/blog-app.git",
      icon: FaPenNib,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      name: "Chat App",
      description: "A MERN stack chat application built for real-time messaging with a smooth and responsive user experience.",
      features: ["Real-time chat experience", "Responsive MERN stack interface", "Fast messaging workflow"],
      impact: "Delivered seamless real-time communication with a modern full-stack architecture and accessible UI.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveLink: "https://chat-app-psi-fawn-46.vercel.app/",
      sourceCode: "https://github.com/shivanshugupta456/ChatApp.git",
      icon: FaComments,
      gradient: "from-fuchsia-500 to-pink-600",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-10"
    >
      <div className="rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <h1 className="text-3xl font-bold mb-5 text-slate-100">Portfolio</h1>
        <span className="underline font-semibold text-slate-300">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 my-7 md:my-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
            <div
              className="border border-slate-700 rounded-[1.6rem] shadow-lg hover:shadow-2xl md:hover:scale-[1.02] transition-all duration-300 overflow-hidden bg-slate-900/90"
              key={project.id}
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex flex-col items-center justify-center gap-4`}>
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm">
                  <ProjectIcon className="text-white" size={34} />
                </div>
                <h2 className="text-white text-2xl font-bold text-center px-4">
                  {project.name}
                </h2>
              </div>

              {/* Project Details */}
              <div className="p-5 md:p-6">
                <h3 className="font-bold text-xl mb-3 text-slate-100">{project.name}</h3>
                <p className="text-slate-300 mb-2 leading-relaxed">{project.description}</p>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-slate-300">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-300 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-slate-300">Real Impact</h4>
                  <p className="text-slate-300 text-sm">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-200 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      (() => {
                        const TechIcon = techIcons[tech];

                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            {TechIcon ? <TechIcon size={12} /> : null}
                            {tech}
                          </span>
                        );
                      })()
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
