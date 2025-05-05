"use client";

import { motion } from "framer-motion";
import data from "./data.json";

const Hero = () => (
    <main className="bg-black">
        <section className="flex relative flex-col items-center pt-5 w-screen h-screen md:pt-7">
            <motion.div
                className="absolute inset-0 z-0 bg-center bg-cover brightness-30"
                style={{
                    backgroundImage: `url(${data.heroSection.backgroundImage})`,
                }}
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
                    {data.heroSection.title}
                </motion.h2>
                <motion.p
                    className="mx-auto w-[90%] sm:w-3/4 text-sm md:w-2/4 md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {data.heroSection.description}
                </motion.p>
            </div>
        </section>
    </main>
);

export default Hero;
