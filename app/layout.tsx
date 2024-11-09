import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";

const montserrat = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});
export const metadata: Metadata = {
  title: "Adrien legeleux - portfolio",
  description: "Je suis un développeur spécialisé en next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.className}>
      <body className={` antialiased font-montserrat`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
