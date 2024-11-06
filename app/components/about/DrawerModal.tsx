import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconPinInvoke } from "@tabler/icons-react";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

interface DrawerProps {
  project: {
    img: StaticImageData;
    title: string;
    link: string;
    languages: string[];
    description: string;
  };
}

export default function DrawerDemo({ project }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Image
          src={project.img}
          alt="image du project de mon portfolio adrien legeleux"
          width={200}
          height={200}
          className="w-full rounded-3xl cursor-pointer"
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className=" w-full  overflow-y-auto py-5">
          <div className=" max-w-lg mx-auto space-y-8">
            <DrawerHeader>
              <DrawerTitle className="text-3xl font-bold">
                {project.title}
              </DrawerTitle>
              <DrawerDescription className="text-lg">
                {project.description}
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-8">
              <Link href={project.link}>
                <Image
                  src={project.img}
                  alt="image du project de mon portfolio adrien legeleux"
                  width={200}
                  height={200}
                  className="w-full rounded-3xl cursor-pointer shadow-xl shadow-black/10"
                />
              </Link>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Language utilisé</h4>
                <div className="flex gap-4 items-center">
                  {project.languages.map((lang, idx) => {
                    return (
                      <div
                        key={`langaue de ${project.title} num ${idx}`}
                        className="px-4 py-2 rounded-xl dark:text-black flex items-center justify-center gap-2 bg-indigo-100 dark:bg-indigo-200 border border-indigo-600"
                      >
                        <span>{lang}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <DrawerFooter>
              <Link href={project.link}>
                <Button>
                  {" "}
                  <IconPinInvoke className="h-6 w-6" /> Voir le site
                </Button>
              </Link>
              <DrawerClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
