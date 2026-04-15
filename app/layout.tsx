import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioExplore - Competition",
  description: "Exploring the blueprint of life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="scroll-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}