import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Header from "./Header/page";
 


const geistSans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"]
   
});

export const metadata: Metadata = {
  title: "E-Commerce Website | Web Page Design | UI Kit | Interior Landing Page",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}  antialiased`}
      >
        <Header/>
        {children}
         
      </body>
    </html>
  );
}
