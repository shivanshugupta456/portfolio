import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-gray-100 pt-16 pb-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>
              <h2 className="text-xl font-bold mb-3">Quick Links</h2>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><a href="#Home" className="hover:text-white">Home</a></li>
                <li><a href="#About" className="hover:text-white">About</a></li>
                <li><a href="#Portfolio" className="hover:text-white">Portfolio</a></li>
                <li><a href="#Contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Contact</h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p className="flex items-center gap-2"><FaEnvelope className="text-blue-300" /> <a href="mailto:rajkishoregupta716@gmail.com" className="hover:text-white">rajkishoregupta716@gmail.com</a></p>
                <p className="flex items-center gap-2"><FaMobileAlt className="text-blue-300" /> <a href="tel:+919368220357" className="hover:text-white">+91 9368220357</a></p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-300" /> Firozabad, UP, India</p>
              </div>
              <div className="flex items-center mt-5 space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-slate-800 hover:bg-blue-600 transition-colors"><FaFacebook size={20} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-slate-800 hover:bg-sky-500 transition-colors"><FaTwitter size={20} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-slate-800 hover:bg-pink-500 transition-colors"><FaInstagram size={20} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-slate-800 hover:bg-cyan-500 transition-colors"><FaLinkedinIn size={20} /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm space-y-2">
            <p>&copy; {new Date().getFullYear()} Shivanshu Gupta.</p>
            <p>Built with React & <span className="text-pink-400"><FaHeart className="inline-block align-middle" /></span> by Shivanshu</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
