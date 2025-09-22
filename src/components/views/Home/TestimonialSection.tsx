
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { ReadMoreButton } from "@/components/core/DefaultButton";
import Carousel from "@/components/structured/Home/Carousel";
import { PiTargetLight, PiShieldChevronLight } from "react-icons/pi";
import { HiOutlineBolt } from "react-icons/hi2";

export default function TestimonialSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    
    return (
        <div className="container scheme-light py-16 px-8 lg:px-24 flex justify-center items-center flex-col relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[var(--nigeria-green)] blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[var(--gold)] blur-3xl" />
            </div>

            <motion.div 
                className="flex flex-col justify-center items-center text-center max-w-5xl relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--nigeria-green)]/10 border border-[var(--nigeria-green)]/20 mb-6"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-[var(--nigeria-green)] font-medium t"> Why Choose Us</p>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    className="font-serif mb-8 bg-gradient-to-r from-[var(--neutral-darkest)] via-[var(--nigeria-green-dark)] to-[var(--azure-dark)] bg-clip-text text-transparent"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2>Comprehensive Visa Services</h2>
                </motion.div>

                {/* Subtitle */}
                <motion.div 
                    className="leading-relaxed mb-8 text-[var(--neutral-dark)] max-w-4xl"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <p>We offer end-to-end support for your Nigerian visa application. Our experienced team ensures a smooth, hassle-free experience from initial consultation to final approval.</p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    {[
                        { 
                            icon: <PiTargetLight className="text-3xl" />, 
                            title: "Expert Guidance", 
                            description: "Professional consultation from certified visa specialists" 
                        },
                        { 
                            icon: <HiOutlineBolt className="text-3xl" />, 
                            title: "Fast Processing", 
                            description: "Streamlined application process for quicker results" 
                        },
                        { 
                            icon: <PiShieldChevronLight className="text-3xl" />, 
                            title: "Success Guarantee", 
                            description: "98% success rate with personalized support" 
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[var(--neutral-light)]/20 hover:shadow-lg transition-all duration-300"
                            whileHover={{ 
                                scale: 1.05,
                                y: -5
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="text-3xl mb-4 flex justify-center">{feature.icon}</div>
                            <h4 className="font-serif text-xl text-[var(--nigeria-green-dark)] mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-[var(--neutral-dark)] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

   
                    <ReadMoreButton />
              
            </motion.div>

            {/* Enhanced Carousel */}
            <motion.div
                className="w-full relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <Carousel />
            </motion.div>
        </div>
    )
}