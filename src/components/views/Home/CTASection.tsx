



import { ConsultButton } from "@/components/core/ButtonWIcon";
import { ContactButton } from "@/components/core/DefaultButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTASection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="container scheme-light py-24 px-8 lg:px-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div 
                    className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-[var(--nigeria-green)] to-[var(--nigeria-green-light)] blur-3xl"
                    
                    animate="animate"
                />
                <motion.div 
                    className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--lima)] blur-3xl"
                    
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--lima)] to-[var(--nigeria-green)]/30 blur-3xl"
                    
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            {/* Floating Elements */}
            <motion.div 
                className="absolute top-20 left-20 w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-2xl"
                
                animate="animate"
            >
                ✈️
            </motion.div>
            <motion.div 
                className="absolute top-32 right-32 w-16 h-16 rounded-full bg-[var(--nigeria-green)]/20 flex items-center justify-center text-2xl"
                
                animate="animate"
                style={{ animationDelay: '1.5s' }}
            >
                🛂
            </motion.div>
            <motion.div 
                className="absolute bottom-40 left-40 w-10 h-10 rounded-full bg-[var(--lima)]/20 flex items-center justify-center text-xl"
                
                animate="animate"
                style={{ animationDelay: '0.5s' }}
            >
                📋
            </motion.div>

            <motion.div 
                className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[var(--nigeria-green)]/10 to-[var(--gold)]/10 border border-[var(--nigeria-green)]/20 mb-8"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="text-[var(--nigeria-green)] t font-medium"> Start Your Journey</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                    className="font-serif  mb-8 max-w-4xl bg-gradient-to-r from-[var(--nigeria-green-darkest)] via-[var(--nigeria-green)] via-[var(--gold)] to-[var(--lima)] bg-clip-text text-transparent leading-tight"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Ready to Start Your Visa Journey?
                </motion.h2>

                {/* Subtitle */}
                <motion.p 
                    className="leading-relaxed mb-12 text-[var(--neutral-darker)] max-w-3xl"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Connect with our expert consultants and take the first step towards a successful Nigerian visa application. Your dream destination is just one consultation away.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-6 mb-12"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <ConsultButton />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <ContactButton />
                    </motion.div>
                </motion.div>

 

                {/* Contact Info */}
                <motion.div 
                    className="mt-12 text-center"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                >
                    <p className="text-[var(--neutral-dark)] mb-4">
                        Need immediate assistance? Call us now:
                    </p>
                    <motion.a 
                        href="tel:+90-530-561-9919"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>+90 530 561 9919</span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}