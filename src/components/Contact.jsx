import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("fi-sender-fullName", data.name);
    formData.append("fi-sender-email", data.email);
    formData.append("fi-text-your-message", data.message);

    try {
      const response = await axios.post("https://forminit.com/f/4dwqo7edhh1", formData, {
        timeout: 10000,
        headers: { "Accept": "application/json" }
      });

      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
          icon: <FaCheckCircle className="text-green-500" />
        });
        reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.code === "ECONNABORTED") {
        toast.error("Request timeout. Please try again.");
      } else if (error.response?.status === 429) {
        toast.error("Too many requests. Please wait a moment and try again.");
      } else {
        toast.error("Failed to send message. Please try again or email me directly.", {
          duration: 5000
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      name="Contact"
      className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-20"
    >
      <div className="pointer-events-none absolute -left-8 -top-10 h-44 w-44 rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-300 opacity-30 blur-3xl" />

      <div className="relative z-10 rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-7 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Get In Touch</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100">Contact Me</h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            Have a project, opportunity, or idea in mind? Send a message and I&apos;ll get back with a thoughtful and practical response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5 bg-slate-900/90 rounded-[1.7rem] md:rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-200">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                  maxLength: { value: 100, message: "Name must be less than 100 characters" }
                })}
                className="mt-2 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  ⚠️ {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  },
                })}
                className="mt-2 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  ⚠️ {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Share your thoughts, opportunities, or ideas..."
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                  maxLength: { value: 5000, message: "Message must be less than 5000 characters" }
                })}
                className="mt-2 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  ⚠️ {errors.message.message}
                </p>
              )}
              <p className="text-slate-400 text-xs mt-1">
                {register("message").name ? "Character limit: 5000" : ""}
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-semibold text-white shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-blue-500/30"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-slate-400 text-xs text-center">
              Or email directly: <a href="mailto:rajkishoregupta716@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">rajkishoregupta716@gmail.com</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
