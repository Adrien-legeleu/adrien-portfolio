"use client";
import { Spotlight } from "@/components/aceternity/Spotlight";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Project from "./components/project/Project";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      <div className="space-y-20">
        <Landing />
        <About />
        <Project />
      </div>
    </div>
  );
}
