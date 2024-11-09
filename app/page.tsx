"use client";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <div className="space-y-20 lg:px-20 sm:px-10 px-4 sm:overflow-x-hidden ">
        <Landing />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
