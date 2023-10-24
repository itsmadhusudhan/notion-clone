"use client";

import { cn } from "notion-ui";

import { ModeToggle } from "@/components/ModeToggle";
import Logo from "./Logo";

import { useScrollTop } from "@/hooks/useScrollTop";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f]",
        scrolled && "shadow-sm border-b"
      )}
    >
      <Logo />
      <div className="md:ml-auto justify-end w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
