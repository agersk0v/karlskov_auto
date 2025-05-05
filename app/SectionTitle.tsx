"use client";

import { motion } from "motion/react";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <motion.h2
            className="text-3xl text-center md:text-4xl md:text-start"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {title}
        </motion.h2>
    );
};

export default SectionTitle;
