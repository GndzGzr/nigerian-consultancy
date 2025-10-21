"use client";
import { ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const ConsultButton = () => {
    return (

        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <a href="tel:+905305619919" className="group rounded-full primary-btn pl-3 pr-1 py-1 flex justify-center items-center hover:cursor-pointer">
                Book a Consultation
                <ArrowRightCircleIcon className="inline-block h-8 w-8 ml-2 transition-transform duration-300 group-hover:scale-125" />
            </a>
        </motion.div>
    )
}

const GetStartedButton = () => {
    return (
        <button className="group text-[var(--nigeria-green)] px-4 py-2 hover:cursor-pointer w-40 flex justify-center items-center">

            Get Started
            <ArrowRightIcon className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />

        </button>
    )
}


export { ConsultButton, GetStartedButton };