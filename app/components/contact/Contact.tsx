import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconBrandGmail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <Card className="py-5 rounded-3xl" id="contact">
      <form className="w-1/2 mx-auto space-y-5">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">
            Contactez-nous !
          </CardTitle>
          <CardDescription className="text-center">
            Contactez-nous pour avoir plus d'informtions ou commencez à
            travailler avec nous.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Label htmlFor="name">Prénom</Label>
              <Input name="name" id="name" type="text" placeholder="Robert" />
            </div>
            <div>
              <Label htmlFor="last_name">Nom</Label>
              <Input
                name="last_name"
                id="last_name"
                type="text"
                placeholder="Redford"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="robert@gmail.com"
              />
            </div>
            <div>
              <Label htmlFor="tel">Tel</Label>
              <Input
                name="tel"
                id="tel"
                type="tel"
                placeholder="06 53 62 78 83"
              />
            </div>
            <Textarea
              name="text"
              id="text"
              placeholder="Entrez votre message"
              className="col-span-2 min-h-60"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-5">
          <Button variant="outline" type="submit">
            Envoyer <IconArrowRight className="h-5 w-5" />
          </Button>
          <Button type="button">
            <IconBrandGmail className="h-5 w-5" /> Via Gmail
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
