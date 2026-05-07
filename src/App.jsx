import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_12%_18%,rgba(30,64,175,0.28),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(14,165,233,0.2),transparent_28%)]">
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
