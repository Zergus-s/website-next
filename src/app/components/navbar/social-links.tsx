import Link from "next/link";
import React from "react";
import Image from "next/image";

function SocialLinks() {
  return (
    <div className="hidden md:flex gap-4 w-1/3 justify-end">
      <Link href="https://github.com/Zergus-s" target="_blank">
        <Image src="/github.ico" alt="github" width={24} height={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/gaidashevskyi/" target="_blank">
        <Image src="/linkedin.svg" alt="github" width={24} height={24} />
      </Link>
    </div>
  );
}

export default SocialLinks;
