import Link from "next/link";
import React from "react";

function NavBarLogo() {
  return (
    <div className="md:hidden lg:flex w-1/3 justify-center">
      <Link
        href="/"
        className="w-fit text-sm bg-black rounded-md p-1  font-semibold flex items-center"
      >
        <span className="text-white/80 mr-1 py-1 px-2">Anton</span>
        <span className="h-8 rounded bg-white/80 text-black py-1 px-2 flex items-center justify-center">
          Gaidashevskyi
        </span>
      </Link>
    </div>
  );
}

export default NavBarLogo;
