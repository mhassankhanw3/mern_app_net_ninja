import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-neutral-200">
      <Link href="/">
        <span className="text-3xl text-neutral-800 font-bold">
          Workout Buddy
        </span>
      </Link>
    </nav>
  );
}
