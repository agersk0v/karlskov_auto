"use client";

// favicon.ico og og:image

import { User, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <motion.header
                className="flex sticky top-0 left-0 z-20 justify-center items-center py-3 w-screen bg-black md:py-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <nav className="w-[85%] md:w-[80%] flex gap-6 md:gap-12 items-end">
                    <h1 className="text-2xl text-blue-500 md:text-3xl">
                        <Link href="/">Karlskov Auto</Link>
                    </h1>
                    <ul className="hidden gap-3 md:flex md:gap-5">
                        <li className="text-sm transition duration-500 md:text-base hover:text-blue-500">
                            <Link href="/#aabningstider" aria-label="Se åbningstider">
                                åbningstider
                            </Link>
                        </li>

                        <li className="text-sm transition duration-500 md:text-base hover:text-blue-500">
                            <Link href="/#kontakt" aria-label="Se kontaktinformation">
                                kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.header>
            <main className="bg-black">
                <section className="flex relative flex-col items-center pt-5 w-screen h-screen md:pt-7">
                    <motion.div
                        className="absolute inset-0 z-0 bg-center bg-cover brightness-30 bg-[url(/images/hero.jpg)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                    <div className="flex relative z-10 flex-col gap-2 items-center h-full text-center md:gap-3 md:justify-center lg:gap-7">
                        <motion.h2
                            className="w-[90%] md:w-4/5 text-4xl text-center text-blue-500 md:text-5xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Dit nye lokale autoværksted
                        </motion.h2>
                        <motion.p
                            className="mx-auto w-[90%] sm:w-3/4 text-sm md:w-2/4 md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Vi tilbyder Reparation af alle bilmærker, Reparation af varebiler,
                            Reparation skader, Aircondition service, Dækcenter, Klargøring til
                            syn, Service eftersyn, Reparation trailer, forsikringskader
                        </motion.p>
                    </div>
                </section>
                <motion.section
                    className="flex flex-col items-center pt-16 md:pt-28"
                    id="aabningstider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="w-[90%] md:w-[80%] flex flex-col gap-10 md:gap-20">
                        <motion.h2
                            className="text-3xl text-center md:text-4xl md:text-start"
                            initial={{ x: -50 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Åbningstider
                        </motion.h2>
                        <div className="flex flex-col gap-8 justify-between md:flex-row md:gap-4">
                            <motion.div
                                className="flex flex-col gap-1 items-center md:gap-2"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl text-blue-500 md:text-4xl">
                                    16:00-21:00
                                </h3>
                                <p className="text-lg md:text-xl">mandag-torsdag</p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col gap-1 items-center md:gap-2"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl text-blue-500 md:text-4xl">
                                    16:00-19:00
                                </h3>
                                <p className="text-lg md:text-xl">fredag</p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col gap-1 items-center md:gap-2"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl text-blue-500 md:text-4xl">
                                    Efter aftale
                                </h3>
                                <p className="text-lg md:text-xl">lørdag-søndag</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    className="flex flex-col items-center py-16 md:py-28"
                    id="kontakt"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="w-[90%] md:w-[80%] flex flex-col gap-5 md:gap-7">
                        <motion.h2
                            className="text-3xl text-center md:text-4xl md:text-start"
                            initial={{ x: -50 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Kontakt
                        </motion.h2>
                        <div className="flex flex-col gap-5 md:flex-row md:gap-7">
                            <motion.div
                                className="w-full md:w-[50%] aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src="https://placehold.co/600x400"
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                            <div className="flex flex-col gap-2 text-base md:gap-3 md:text-xl lg:gap-7">
                                <motion.div
                                    className="flex gap-2 items-center"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <MapPin className="text-blue-500" size={24} />
                                    <p>Teknikvej 4, 4532 Gislinge</p>
                                </motion.div>

                                <motion.div
                                    className="flex gap-2 items-center"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Phone className="text-blue-500" size={24} />
                                    <p>24491915</p>
                                </motion.div>
                                <motion.div
                                    className="flex gap-2 items-center"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <User className="text-blue-500" size={24} />
                                    <p>Henrik Karlskov</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
            <footer className="py-10 text-sm text-center text-gray-400">
                © 2025 Karlskov Auto · Teknikvej 4, 4532 Gislinge · 24491915
            </footer>
        </>
    );
}
