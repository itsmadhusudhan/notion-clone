import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";

import "notion-ui/global.css";

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Collaborative workspace",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      href: "/logo.svg",
      url: "logo.svg",
    },
    // {
    //   media: "(prefers-color-scheme: dark)",
    //   href: "/logo-dark.svg",
    //   url: "/logo-dark.svg",
    // },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
          storageKey="notion-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
