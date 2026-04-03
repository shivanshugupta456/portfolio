import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      name: "Live Class",
      description: "Interactive online learning platform with video streaming, chat, and collaborative whiteboard.",
      features: ["Real-time video conferencing", "Live chat with moderation", "Collaborative whiteboard"],
      impact: "Boosted remote learning engagement by delivering smooth real-time interactions and collaboration.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC"],
      liveLink: "https://live-class-flame.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/live-class.git",
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Live+Class"
    },
    {
      id: 2,
      name: "To-Do App",
      description: "Task management app for prioritizing work, tracking progress, and improving productivity.",
      features: ["Priority and due-date labels", "Local data persistence", "Responsive UI"],
      impact: "Helped users stay organized by ensuring tasks are tracked and updated in real-time.",
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      liveLink: "https://shivanshugupta456.github.io/To-Do/",
      sourceCode: "https://github.com/shivanshugupta456/To-Do.git",
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=To-Do+App"
    },
    {
      id: 3,
      name: "Employee Management System",
      description: "Dashboard for employee records and role-based access, with reporting and analytics.",
      features: ["CRUD employee profiles", "Role-based access control", "Performance analytics"],
      impact: "Reduced HR process time by 40% through centralized record maintenance and reporting.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      liveLink: "https://employee-management-system-gamma-six.vercel.app",
      sourceCode: "https://github.com/shivanshugupta456/Employee-Management-System-.git",
      image: "https://via.placeholder.com/400x250/6366F1/FFFFFF?text=Employee+Management"
    },
    {
      id: 4,
      name: "Myntra Functional Clone",
      description: "E-commerce clone with product browsing, search, cart, and checkout flows.",
      features: ["Smart product filters", "Seamless cart management", "Checkout workflow"],
      impact: "Demonstrated scalable e-commerce architecture and improved conversion-style flows.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      liveLink: "https://shivanshugupta456.github.io/Myntra-Functional-Clone/",
      sourceCode: "https://github.com/shivanshugupta456/Myntra-Functional-Clone.git",
      image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Myntra+Clone"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {projects.map((project) => (
            <div
              className="border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white"
              key={project.id}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold text-center px-4">
                  {project.name}
                </h2>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-700 mb-2 leading-relaxed">{project.description}</p>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-slate-600">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-slate-600">Real Impact</h4>
                  <p className="text-gray-700 text-sm">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
