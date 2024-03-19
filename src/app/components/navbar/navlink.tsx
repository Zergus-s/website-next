import { MotionValue, useMotionValue, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  link: {
    url: string;
    label: string;
  };
};

const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number
) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;

  return (value: number) => {
    return (
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    );
  };
};

function NavLink({ link }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link.url;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  return (
    <motion.li
      className="relative "
      onPointerMove={(event) => {
        const item = event.currentTarget;
        setTransform(item, event, x, y);
      }}
      key={link.url}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
    >
      <Link href={link.url}>
        <p className="z-10 py-2 px-4 relative hover:bg-black/20 rounded transition duration-200 text-white/80">
          {link.label}
        </p>
      </Link>
      {isActive && (
        <motion.div
          className="absolute bg-black/60 rounded top-0 bottom-0 left-0 right-0 "
          layoutId="navigation"
        />
      )}
    </motion.li>
  );
}

export default NavLink;
