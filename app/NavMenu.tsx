"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import Link from "next/link";

const NavMenu = ({
    isNavOpen,
    setIsNavOpen,
}: {
    isNavOpen: boolean;
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        <AnimatePresence initial={false}>
            {isNavOpen && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                        default: { type: "tween" },
                    }}
                    exit={{ y: "-100%" }}
                    className="absolute top-0 left-0 z-50 p-5 w-screen min-h-screen bg-black"
                >
                    <button
                        aria-label="close navigation"
                        className="flex justify-end w-full text-gray"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <X color="currentColor" size={35} strokeWidth={3} />
                    </button>
                    <motion.ul
                        variants={animationContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-5 justify-around items-center p-5 border-b-2 border-white border-dashed text-md"
                    >
                        <motion.li transition={{ duration: 0.5 }} variants={textFromSide}>
                            <Link href="#aabningstider" onClick={() => setIsNavOpen(false)}>
                                Åbningstider
                            </Link>
                        </motion.li>
                        <motion.li transition={{ duration: 0.5 }} variants={textFromSide}>
                            <Link href="#kontakt" onClick={() => setIsNavOpen(false)}>
                                Kontakt
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavMenu;
