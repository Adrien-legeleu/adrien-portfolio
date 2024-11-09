"use client";
import { Highlight } from "@/components/aceternity/hero-highlight";
import { motion } from "framer-motion";

import NextImg from "@/public/image/next-js.svg";
import TailwindImg from "@/public/image/Tailwind_CSS_Logo.svg.png";
import TypescriptImg from "@/public/image/Typescript_logo_2020.svg.png";
import NodeImg from "@/public/image/png-transparent-js-logo-node-logos-and-brands-icon.png";
import SqlImg from "@/public/image/Sql_data_base_with_logo.png";
import Image from "next/image";

const dataLanguagesCode = [
  {
    title: "Next",
    img: NextImg,
  },
  {
    title: "Tailwind",
    img: TailwindImg,
  },
  {
    title: "Typescript",
    img: TypescriptImg,
  },
  {
    title: "Node js",
    img: NodeImg,
  },
  {
    title: "Sql",
    img: SqlImg,
  },
];

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: [40, -5, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className=" pb-20 space-y-10"
    >
      <div className="space-y-5">
        <h2 className="text-4xl leading-[3.5rem] font-bold">
          Je suis un développeur <br /> spécialisé en{" "}
          <Highlight className="text-black dark:text-white">NEXT JS</Highlight>
        </h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Fort de deux années d&apos; expérience, j&apos; aide les entreprises
          et les entrepreneurs à concevoir des applications web modernes,
          rapides et scalables. <br /> Mon expertise en{" "}
          <Highlight className="text-black dark:text-white">Next.js</Highlight>{" "}
          me permet de créer des solutions sur mesure, adaptées aux besoins et
          aux objectifs de chaque client. <br /> Chaque projet est une
          opportunité d&apos; apporter des solutions techniques optimisées et de
          soigner l&apos; expérience utilisateur.
        </p>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-neutral-800 dark:text-neutral-300 font-semibold ">
          Technologies
        </h3>
        <ul className="flex gap-4">
          {dataLanguagesCode.map((data, idx) => {
            return (
              <li className="px-4 py-2 rounded-xl dark:text-black flex items-center justify-center gap-2 bg-indigo-100 dark:bg-indigo-200 border border-indigo-600">
                <Image
                  src={data.img}
                  alt="image de mes languages de programmation - Adrien legeleux - portofolio"
                  width={50}
                  height={50}
                  className="rounded-full h-5 w-5 object-cover"
                />
                <span>{data.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
