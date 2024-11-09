"use client";
import Image from "next/image";
import Avatar from "@/public/image/avatar.png";
import { Typewriter } from "react-simple-typewriter";
import ShinyButton from "@/components/ui/shiny-button";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spotlight } from "@/components/aceternity/Spotlight";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="md:h-screen h-full w-full relative  "
    >
      <Spotlight className="-top-20 left-0  md:-top-20" />
      <div className="max-w-[1400px] mx-auto md:flex-row flex-col-reverse flex items-center gap-8 justify-between h-full w-full">
        <div className="space-y-5">
          <h1 className="md:text-left text-center font-semibold text-neutral-700 dark:text-neutral-300 text-4xl sm:text-5xl leading-[3.8rem]">
            <span
              className={cn(
                "group relative font-bold  backdrop-blur-sm duration-500 ease-out [--bg-size:300%] "
              )}
            >
              <div
                className={`absolute   animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%]  ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
              />
              <span
                className={cn(
                  `inline animate-gradient sm:text-6xl text-5xl md:text-left text-center bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                <Typewriter
                  words={[
                    "Bonjour",
                    "Holla",
                    "Wilkommen, ",
                    "Hello",
                    "Buongiorno",
                  ]}
                  loop={0}
                  cursor={true}
                />
              </span>
            </span>
            <br /> Je m'apelle Adrien
          </h1>
          <p className="md:text-left text-center max-w-md text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            quisquam repudiandae aperiam! Alias, nobis blanditiis!
          </p>
          <div className="pt-5 flex flex-col  max-md:gap-4 max-md:justify-center max-md:items-center">
            <Link href="#contact">
              <ShinyButton>
                <div className="flex gap-2 items-center">
                  Me contactez <IconChevronRight className="h-5 w-5" />
                </div>
              </ShinyButton>
            </Link>
            <div className=" gap-4 md:hidden flex">
              <Link href="https://github.com/Adrien-legeleu" target="_blank">
                <IconBrandGithub className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adrien-legeleux-a7243a272/"
                target="_blank"
              >
                <IconBrandLinkedin className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=adrienlegeleu@gmail.com&su=Sujet&body=Message%20ici"
                target="_blank"
              >
                <IconBrandGmail className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={Avatar}
          width={300}
          height={300}
          alt="photo de profil du porfolio de Adrien legeleux"
          className="md:w-80 w-48 md:h-80 h-48 md:mt-0 mt-32"
        />
      </div>
    </motion.div>
  );
}
