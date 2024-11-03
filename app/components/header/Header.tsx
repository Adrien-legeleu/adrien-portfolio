import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export default function Header() {
  return (
    <div className="fixed w-full z-50 to-0 left-0 justify-between flex items-center py-3 px-20">
      <span>Adrien legeleux</span>
      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
          <IconBrandGithub className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
          <IconBrandLinkedin className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
          <IconBrandGmail className="w-8 h-8 p-[7px] cursor-pointer text-neutral-900 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700  rounded-xl" />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
