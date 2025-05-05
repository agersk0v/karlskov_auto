"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "./data.json";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const animationContainer = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textFromSide = {
    hidden: { opacity: 0, x: -100, scale: 0 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.header
      className="flex sticky top-0 left-0 z-20 justify-center items-center py-3 w-screen bg-black md:py-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-[85%] md:w-[80%] flex justify-between items-center">
        <AnimatePresence initial={false}>
          {isNavOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ default: { type: "tween" } }}
              exit={{ y: "-100%" }}
              className="absolute top-0 left-0 z-50 p-5 w-screen min-h-screen bg-black"
            >
              <button
                aria-label="close navigation"
                className="flex justify-end w-full text-gray"
                onClick={() => setIsNavOpen(false)}
              >
                <X color="currentColor" size="35" strokeWidth={3} />
              </button>
              <motion.ul
                variants={animationContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-5 justify-around items-center p-5 border-b-2 border-white border-dashed text-md"
              >
                {data.header.menuItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    transition={{ duration: 0.5 }}
                    variants={textFromSide}
                  >
                    <Link href={item.href} onClick={() => setIsNavOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-6 items-end md:gap-12">
          <Link href="/">
            <div className="w-1/2">
              <img
                className="object-contain w-full h-full"
                src={data.header.logo}
                alt="Logo"
              />
            </div>
          </Link>
          <ul className="hidden gap-3 md:flex md:gap-5">
            {data.header.menuItems.map((item, idx) => (
              <li
                key={idx}
                className="text-sm transition duration-500 md:text-base hover:text-blue-500"
              >
                <Link href={item.href} aria-label={`Se ${item.label}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsNavOpen(true)}
        >
          <Menu size="32" />
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
