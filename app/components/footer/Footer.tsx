import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-between py-5">
      <TextHoverEffect text="ADRIEN" />
      <div className="w-full flex justify-between items-center">
        <div className="space-x-5 text-sm text-muted-foreground">
          <span className="font-semibold ">@adrienlegeleux</span>
          <span>@2024</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="">GitHub</Link>
          <Link href="">Linkedln</Link>
          <Link href="">Gmail</Link>
          <Link href="#contact">
            <Button>Contactez-moi</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
