import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="sm:h-[40rem] h-full flex flex-col items-center justify-between py-5 max-w-[1400px] mx-auto">
      <TextHoverEffect text="ADRIEN" />

      <div className="w-full flex sm:flex-row flex-col gap-4 justify-between items-center">
        <div className="space-x-5 text-xs text-muted-foreground">
          <span className="font-semibold ">
            <span className="font-thin">made by</span> adrien legeleux
          </span>
          <span>©2024</span>
        </div>
        <div className="flex items-center gap-5 max-sm:text-sm">
          <Link target="_blank" href="https://github.com/Adrien-legeleu">
            GitHub
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/adrien-legeleux-a7243a272/"
          >
            Linkedln
          </Link>
          <Link
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tonadresse@gmail.com&su=Sujet&body=Message%20ici"
          >
            Gmail
          </Link>
          <Link href="#contact">
            <Button>Contactez-moi</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
