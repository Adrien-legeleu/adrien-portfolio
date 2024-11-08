import { ReactNode } from "react";
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

export interface DrawerProps {
  project: {
    img: string | StaticImageData;
    title: string;
    link: string;
    languages: string[];
    description: string;
    video: string;
    color: string;
    badge: any;
  };
}

export default function DrawerDemo({ project }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div
          className="group w-full h-[200px] relative rounded-3xl cursor-pointer shadow-xl dark:shadow-2xl shadow-black/30 dark:shadow-neutral-100/15"
          style={{ backgroundColor: project.color }}
        >
          <div className="absolute top-2 right-2 z-50 flex items-center justify-center">
            {project.badge} {/* Affiche le badge ici */}
          </div>
          <Image
            src={project.img}
            alt="image du project de mon portfolio adrien legeleux"
            width={200}
            height={200}
            className="w-full h-full rounded-3xl duration-300 group-hover:opacity-0 absolute top-0 left-0 "
          />
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="group-hover:opacity-100 rounded-3xl opacity-0 duration-500 ease-out w-full h-full object-contain"
          ></video>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" w-full overflow-y-auto py-5">
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
                  className="w-full rounded-3xl cursor-pointer shadow-xl dark:shadow-2xl shadow-black/30 dark:shadow-neutral-100/20"
                />
              </Link>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Language utilisé</h4>
                <div className="flex gap-4 items-center">
                  {project.languages.map((lang, idx) => (
                    <div
                      key={`langaue de ${project.title} num ${idx}`}
                      className="px-4 py-2 rounded-xl dark:text-black flex items-center justify-center gap-2 bg-indigo-100 dark:bg-indigo-200 border border-indigo-600"
                    >
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Link href={project.link} className="w-full">
                <Button className="w-full">
                  <IconPinInvoke className="h-6 w-6" /> Voir le site
                </Button>
              </Link>
              <DrawerClose asChild>
                <Button variant="secondary">Annuler</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
