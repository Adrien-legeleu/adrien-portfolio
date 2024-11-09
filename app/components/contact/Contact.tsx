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
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    tel: "",
    text: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès !");
        setFormData({ name: "", last_name: "", email: "", tel: "", text: "" });
      } else {
        toast.error("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Erreur d'envoi : " + error);
    }
  };

  return (
    <Card className="md:py-5  max-w-[1400px] mx-auto rounded-3xl" id="contact">
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2  md:w-2/3 w-full mx-auto space-y-5"
      >
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
          <div className="grid 430:grid-cols-2 grid-cols-1 max-sm:text-xs gap-10">
            <div>
              <Label htmlFor="name">Prénom</Label>
              <Input
                name="name"
                id="name"
                type="text"
                required
                placeholder="Robert"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="last_name">Nom</Label>
              <Input
                name="last_name"
                id="last_name"
                required
                type="text"
                placeholder="Redford"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                required
                placeholder="robert@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="tel">Tel</Label>
              <Input
                name="tel"
                required
                id="tel"
                type="tel"
                placeholder="06 53 62 78 83"
                value={formData.tel}
                onChange={handleInputChange}
              />
            </div>
            <Textarea
              name="text"
              id="text"
              required
              placeholder="Entrez votre message"
              className="430:col-span-2 min-h-60"
              value={formData.text}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-5">
          <Button variant="outline" type="submit">
            Envoyer <IconArrowRight className="h-5 w-5" />
          </Button>
          <Link
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tonadresse@gmail.com&su=Sujet&body=Message%20ici"
          >
            <Button type="button">
              <IconBrandGmail className="h-5 w-5" /> Via Gmail
            </Button>
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
