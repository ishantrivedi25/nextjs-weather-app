import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider/ThemeProvider";

export const metadata: Metadata = {
  title: "Next Weather App",
  description: "A weather app built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
