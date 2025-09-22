

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";
import { ReadMoreButton } from "@/components/core/DefaultButton";
import { GetStartedButton } from "@/components/core/ButtonWIcon";
const slides = [
    {
        id: 1,
        image: "/images/carousel-1.jpg",
        alt: "Slide 1",
        value: "Expert",
        title: "Expert Guidance",
        caption: "Personalized Consultation",
        content: "Our experienced consultants provide personalized advice to help you navigate the visa application process with ease.",

    },
    {
        id: 2,
        image: "/images/carousel-2.jpg",
        alt: "Slide 2",
        value: "Support",
        title: "Personalized Support",
        caption: "Tailored Assistance",
        content: "We tailor our services to meet your unique needs, ensuring a smooth and hassle-free application process from start to finish.",

    },
    {
        id: 3,
        image: "/images/carousel-3.jpg",
        alt: "Slide 3",
        value: "Fast",
        title: "Fast Processing",
        caption: "Efficient Service",
        content: "Our streamlined processes ensure that your visa application is processed quickly and efficiently, minimizing delays and maximizing your chances of success.",
    },
]
export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabVariants = {
        inactive: {
            color: "var(--neutral-dark)",
            scale: 1
        },
        active: {
            color: "var(--nigeria-green)",
            scale: 1.05
        },
        hover: {
            color: "var(--nigeria-green-light)",
            scale: 1.02
        }
    };

    const contentVariants = {
        enter: {
            opacity: 0,
            x: 100,
            scale: 0.95
        },
        center: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            x: -100,
            scale: 0.95
        }
    };

    const imageVariants = {
        enter: {
            opacity: 0,
            scale: 0.8,
            rotateY: 90
        },
        center: {
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            rotateY: -90
        }
    };

    return (
        <div className="mt-32 mx-auto">
            {/* Enhanced Tabs */}
            <motion.div
                className="flex justify-center space-x-12 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
                {slides.map((slide, index) => (
                    <motion.button
                        key={slide.id}
                        className="group relative py-4 px-6 rounded-lg transition-all duration-300 hover:bg-[var(--nigeria-green)]/5 hover:cursor-pointer"
                        onClick={() => setActiveIndex(index)}
                        variants={tabVariants}
                        initial="inactive"
                        animate={index === activeIndex ? "active" : "inactive"}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="relative z-10">
                            <motion.h5
                                className="font-serif font-semibold mb-1"
                                layout
                            >
                                {slide.title}
                            </motion.h5>
                            <motion.p className="text-sm opacity-75">
                                {slide.value}
                            </motion.p>
                        </div>

                        {/* Active indicator */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--lima)] rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{ originX: 0 }}
                        />


                    </motion.button>
                ))}
            </motion.div>

            {/* Enhanced Slide content */}
            <div className="relative h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
                            {/* Enhanced Image Section */}
                            <motion.div
                                className="col-span-1 relative overflow-hidden rounded-2xl"
                                variants={imageVariants}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ perspective: 1000 }}
                            >
                                <div className="w-full h-full relative bg-gradient-to-br from-[var(--nigeria-green-light)]/10 to-[var(--azure-light)]/10">
                                    <Image
                                        src={slides[activeIndex].image}
                                        alt={slides[activeIndex].alt}
                                        fill
                                        className="object-cover rounded-2xl"
                                        priority
                                    />
                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--nigeria-green-darkest)]/20 via-transparent to-[var(--gold)]/10 rounded-2xl" />
                                </div>
                            </motion.div>

                            {/* Enhanced Content Section */}
                            <motion.div
                                className="col-span-1 flex flex-col justify-center p-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h6 className="text-[var(--nigeria-green)] font-semibold mb-2 uppercase tracking-wider">
                                        {slides[activeIndex].value}
                                    </h6>
                                    <h3 className="font-serif  mb-6 bg-gradient-to-r from-[var(--neutral-darkest)] to-[var(--nigeria-green-dark)] bg-clip-text text-transparent">
                                        {slides[activeIndex].caption}
                                    </h3>
                                    <p className="leading-relaxed mb-8 text-[var(--neutral-dark)]">
                                        {slides[activeIndex].content}
                                    </p>
                                </motion.div>

                                {/* Enhanced Button Section */}
                                <motion.div
                                    className="flex flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >

                                    <ReadMoreButton />


                                    <GetStartedButton />

                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>


        </div>
    );
};