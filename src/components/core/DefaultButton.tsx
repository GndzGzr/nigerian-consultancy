"use client";
import { Btn } from "../atoms/btn";
import { BtnProps } from "@/utils/interface";
import { motion } from "framer-motion";
const ReadMoreButton = () => {
    const handleClick = () => {
        // navigate to the about page
        window.location.href = "/services";
    }
    return (
           <motion.button
              className="px-4 py-2 border-1 border-[var(--nigeria-green)] text-[var(--nigeria-green)] rounded-full font-medium hover:bg-[var(--nigeria-green)] hover:text-[var(--neutral-white)] transition-all duration-300 flex items-center justify-center hover cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleClick}
            >
              <span>Read More</span>
              
            </motion.button>
    )

}

const ContactButton = () => {
    const handleClick = () => {
        // navigate to the about page
        window.location.href = "/contact";
    }
    return (
           <motion.button
              className="px-4 py-2 border-1 border-[var(--nigeria-green)] text-[var(--nigeria-green)] rounded-full font-medium hover:bg-[var(--nigeria-green)] hover:text-[var(--neutral-white)] transition-all duration-300 flex items-center justify-center hover cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleClick}
            >
              <span>Contact Us</span>
              
            </motion.button>
    )
}

const LearnMoreButton = () => {
    const handleClick = () => {
        // navigate to the about page
        window.location.href = "/about";
    }
    return (
           <motion.button
              className="px-4 py-2 border-1 border-[var(--neutral-white)] text-[var(--neutral-white)] rounded-full font-medium hover:bg-[var(--neutral-white)] hover:text-[var(--nigeria-green-darkest)] transition-all duration-300 flex items-center justify-center hover cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleClick}
            >
              <span>Learn More</span>
              
            </motion.button>
    )
}

export { ReadMoreButton, ContactButton, LearnMoreButton };