import Link from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex justify-between px-4 py-1">
      <Link href="/" className="text-3xl font-bold italic">
        The cook Out
      </Link>
    </div>
  );
};
