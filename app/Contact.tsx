"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, User } from "lucide-react";
import data from "./data.json";

const iconMap = {
  MapPin: <MapPin />,
  Phone: <Phone />,
  User: <User />,
};

const Contact = () => (
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
          className="w-full md:w-[50%]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={data.contactSection.logo}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="flex flex-col gap-2 text-base md:gap-3 md:text-xl lg:gap-7">
          {data.contactSection.contactDetails.map(({ icon, text }, index) => (
            <motion.div
              key={index}
              className="flex gap-2 items-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {icon && (
                <span className="text-blue-500">
                  {iconMap[icon as keyof typeof iconMap]}
                </span>
              )}
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Contact;
