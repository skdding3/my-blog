import React from "react";
import Image from "next/image";
import profile from "@/image/Profile1.jpeg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <Link href={"/"}>
        <Image
          src={profile}
          alt="Profile Logo"
          className="w-20 h-40 rounded-full object-cover"
        />
      </Link>
      <div>
        <p>nav</p>
      </div>
      <div>
        <button className="hidden md:inline-flex text-teal-50 px-8 py-2 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-70 duration-300">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
