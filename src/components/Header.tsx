"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "@/image/Profile1.jpeg";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <IoSunnyOutline className="h-6 w-6 stroke-teal-500 transition group-hover:stroke-teal-700 dark:hidden" />
      <BsMoonStarsFill className="hidden h-6 w-6 fill-zinc-500 stroke-zinc-500 transition dark:block " />
    </button>
  );
};

const NavItem = ({ href, children }: { href: string; children: string }) => {
  let isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absoulte inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-50/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-md bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <Link href={"/"}>
        <Image
          src={profile}
          alt="Profile logo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </Link>
      <div className="flex items-center gap-5">
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </div>
      <div className="flex items-center gap-5">
        <button className="hidden md:inline-flex text-teal-500 px-8 py-2 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300">
          Login
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
