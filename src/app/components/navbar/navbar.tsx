"use client";

import React from "react";

import MenuButton from "./menu-button";
import SocialLinks from "./social-links";
import MenuList from "./menu-list";
import NavBarLogo from "./navbar-logo";
import NavLink from "./navlink";

const links = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/projects", label: "Projects" },
  { url: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="h-full w-full flex items-center justify-start md:justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 backdrop-blur-md">
      {/* LINKS */}
      <nav>
        <ul className="hidden md:flex gap-4 w-1/3 min-w-fit">
          {links.map((link) => (
            <NavLink link={link} key={link.url} />
          ))}
        </ul>
      </nav>
      <NavBarLogo />
      <SocialLinks />
      <div className="md:hidden ml-auto">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        {isOpen && (
          <MenuList links={links} closeNavBar={() => setIsOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
