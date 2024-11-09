import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/image/avatar.png";

export default function Header() {
  return (
    <div className="fixed w-full z-50 to-0 left-0 justify-between flex items-center py-3  lg:px-20 sm:px-10 px-4 max-w-[1400px] 1430:left-1/2 1430:-translate-x-1/2 1430:px-0">
      <span className="flex items-center gap-2 max-sm:text-xs">
        {" "}
        <Image
          src={Avatar}
          width={300}
          height={300}
          alt="photo de profil du porfolio de Adrien legeleux"
          className="h-6 w-6"
        />
        Adrien legeleux
      </span>
      <div className="flex gap-8 items-center">
        <div className=" gap-4 md:flex hidden">
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
        <div className="flex items-center gap-2">
          {" "}
          <Link href="#contact">
            <Button>Contactez-moi</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
