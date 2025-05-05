"use client";

import { motion } from "framer-motion";
import data from "./data.json";

const OpeningHours = () => (
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
                {data.openingHours.map((entry, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col gap-1 items-center md:gap-2"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl text-blue-500 md:text-4xl">{entry.time}</h3>
                        <p className="text-lg md:text-xl">{entry.days}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
);

export default OpeningHours;
