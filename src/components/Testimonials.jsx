import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Project Reviewer - Chat App",
      role: "Technical Evaluation",
      message: "Excellent implementation of Socket.io for real-time messaging. Clean code architecture and smooth user experience across all devices.",
      rating: 5,
      avatar: "🚀",
      highlight: "Real-time Architecture"
    },
    {
      id: 2,
      name: "UI/UX Assessment - CourseApp",
      role: "Design Feedback",
      message: "Intuitive course discovery interface with polished styling. Responsive design works flawlessly across mobile, tablet, and desktop platforms.",
      rating: 5,
      avatar: "✨",
      highlight: "Responsive Design"
    },
    {
      id: 3,
      name: "Performance Metrics - NoteTaking App",
      role: "Lighthouse Testing",
      message: "Outstanding performance optimization with 98+ Lighthouse score. Efficient state management and smooth interactions throughout the application.",
      rating: 5,
      avatar: "⚡",
      highlight: "Performance Focused"
    },
  ];

  return (
    <div
      name="Testimonials"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-20"
    >
      <div className="rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-7 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <div className="mb-8 md:mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Recognition
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
            Project Feedback & Metrics
          </h1>
          <p className="mt-2 text-slate-300">
            Results from deployed applications and technical implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-[1.5rem] border border-slate-700/70 bg-slate-900/90 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <FaQuoteLeft size={80} />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold">
                  {testimonial.highlight}
                </span>

                {/* Message */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="text-slate-100 font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950/40 text-center hover:bg-slate-950/60 transition-all duration-300">
            <p className="text-2xl md:text-3xl font-bold text-cyan-400">90+</p>
            <p className="text-slate-400 text-sm mt-1">Avg Lighthouse Score</p>
          </div>
          <div className="p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950/40 text-center hover:bg-slate-950/60 transition-all duration-300">
            <p className="text-2xl md:text-3xl font-bold text-cyan-400">5</p>
            <p className="text-slate-400 text-sm mt-1">Production Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
