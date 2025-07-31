import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrikant Gaikwad - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React Native (EXPO), NextJS, NodeJS, and React. View my projects and skills in this comprehensive portfolio.",
  keywords: [
    "Full Stack Developer",
    "React Native",
    "NextJS",
    "NodeJS",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Shrikant Gaikwad" }],
  creator: "Shrikant Gaikwad",
  openGraph: {
    title: "Shrikant Gaikwad - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React Native (EXPO), NextJS, NodeJS, and React.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrikant Gaikwad - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React Native (EXPO), NextJS, NodeJS, and React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
