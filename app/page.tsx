"use client";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import { AuroraBackground } from "@/components/aceternity/aurora-background";

export default function Home() {
  return (
    <div className="w-full h-full space-y-20">
      <AuroraBackground>
        <Landing />
      </AuroraBackground>
      <About />
    </div>
  );
}
