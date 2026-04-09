import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fi-sender-fullName", data.name);
    formData.append("fi-sender-email", data.email);
    formData.append("fi-text-your-message", data.message);

    try {
      await axios.post("https://forminit.com/f/4dwqo7edhh1", formData);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      name="Contact"
      className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-16"
    >
      <div className="pointer-events-none absolute -left-8 -top-10 h-44 w-44 rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-300 opacity-30 blur-3xl" />

      <div className="relative z-10 rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-7 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Get In Touch</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100">Contact Me</h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">Have a project, opportunity, or idea in mind? Send a message and I&apos;ll get back with a thoughtful and practical response.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-slate-900/90 rounded-[1.7rem] md:rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" },
                })}
                className="mt-1 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="How can I help you?"
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-semibold text-white shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
