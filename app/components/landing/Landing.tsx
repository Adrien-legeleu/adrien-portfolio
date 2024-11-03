"use client";
import Image from "next/image";
import Avatar from "@/public/image/avatar.png";
import { Typewriter } from "react-simple-typewriter";
import ShinyButton from "@/components/ui/shiny-button";
import { IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      className="h-screen w-full flex items-center gap-8 justify-between relative px-20"
    >
      <div className="space-y-5">
        <h1 className="text-left font-semibold text-neutral-700 dark:text-neutral-300 text-5xl leading-[3.8rem]">
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
                `inline animate-gradient text-6xl text-left bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              <Typewriter
                words={[
                  "Bonjour,",
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
        <p className="text-left max-w-md text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quisquam
          repudiandae aperiam! Alias, nobis blanditiis!
        </p>
        <div className="pt-5">
          <ShinyButton>
            <div className="flex gap-2 items-center">
              Me contactez <IconChevronRight className="h-5 w-5" />
            </div>
          </ShinyButton>
        </div>
      </div>
      <Image
        src={Avatar}
        width={300}
        height={300}
        alt="photo de profil du porfolio de Adrien legeleux"
      />
    </motion.div>
  );
}
