




import { ContactButton } from "@/components/core/DefaultButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineQuestion } from "react-icons/ai";

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const faqVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const faqs = [
        {
            question: "What types of visas do you assist with for Nigeria?",
            answer: "We specialize in all types of Nigerian visas including tourist visas, business visas, student visas, work permits, family reunification visas, and transit visas. Our expertise covers both single-entry and multiple-entry visas with various validity periods.",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        },
        {
            question: "How long does the Nigerian visa application process take?",
            answer: "Processing times vary by visa type: Tourist visas typically take 5-7 business days, business visas 7-10 business days, and work permits 2-4 weeks. We offer expedited processing for urgent cases with additional fees.",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        },
        {
            question: "What documents are required for Nigerian visa applications?",
            answer: "Standard requirements include a valid passport (6+ months validity), completed application form, passport photos, proof of accommodation in Nigeria, flight itinerary, financial statements, and specific documents based on visa type (invitation letters for business, admission letters for students, etc.).",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        },
        {
            question: "Do you provide consultation for Turkish citizens applying to Nigeria?",
            answer: "Yes! We specialize in helping Turkish citizens navigate Nigerian visa requirements. Our team understands both Turkish and Nigerian systems, providing personalized consultations in Turkish and English to ensure smooth applications.",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        },
        {
            question: "What are your service fees and payment options?",
            answer: "Our fees range from 500-2000 TL depending on visa type and service level. We offer comprehensive packages including document preparation, application submission, and follow-up. Payment accepted via bank transfer, credit card, or cash.",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        },
        {
            question: "Do you handle visa rejections and appeals?",
            answer: "Yes, we assist with visa rejection cases by analyzing reasons, preparing stronger applications, and submitting appeals when applicable. Our success rate for reapplications is over 85% due to our thorough approach and experience.",
            icon: <AiOutlineQuestion className="text-xl text-[var(--nigeria-green-darkest)]" />
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="container scheme-light-alt py-24 px-8 lg:px-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--nigeria-green)] blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[var(--gold)] blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--lima)]/20 blur-3xl" />
            </div>

            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-28 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Column - Header */}
                <motion.div 
                    className="col-span-1 lg:col-span-2"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--nigeria-green)]/10 border border-[var(--nigeria-green)]/20 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className="text-[var(--nigeria-green)] t font-medium">Frequently Asked Questions</p>
                    </motion.div>

                    <motion.h2 
                        className="font-serif mb-6 bg-gradient-to-r from-[var(--nigeria-green-darkest)] via-[var(--nigeria-green)] to-[var(--gold)] bg-clip-text text-transparent"
                        variants={itemVariants}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Nigeria Visa FAQs
                    </motion.h2>
                    
                    <motion.p 
                        className="leading-relaxed mb-8 text-[var(--neutral-darker)] max-w-lg"
                        variants={itemVariants}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        Find answers to the most common questions about Nigerian visa applications from Turkey
                    </motion.p>
                    
                    <motion.div
                        variants={itemVariants}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                        <ContactButton />
                    </motion.div>

       
                </motion.div>

                {/* Right Column - FAQ Items */}
                <motion.div 
                    className="col-span-1 lg:col-span-3"
                    variants={containerVariants}
                >
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                variants={faqVariants}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--nigeria-green)]/10 hover:border-[var(--gold)]/30 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                                    {/* Question Button */}
                                    <motion.button
                                        className="w-full p-1 lg:p-4 text-left flex items-center justify-between"
                                        onClick={() => toggleFAQ(index)}
                                        whileHover={{ backgroundColor: "rgba(var(--nigeria-green-rgb), 0.02)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                className="w-10 h-10 rounded-full border-1 border-[var(--nigeria-green-darkest)]  flex items-center justify-center text-white flex-shrink-0"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            >
                                                {faq.icon}
                                            </motion.div>
                                            <p className="font-semibold text-[var(--nigeria-green-darkest)] pr-4">
                                                {faq.question}
                                            </p>
                                        </div>
                                        
                                        <motion.div
                                            className="w-8 h-8 rounded-full bg-[var(--nigeria-green)]/10 flex items-center justify-center flex-shrink-0"
                                            animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <svg 
                                                className="w-5 h-5 text-[var(--nigeria-green)]" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </motion.button>

                                    {/* Answer Panel */}
                                    <AnimatePresence>
                                        {openFAQ === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                                    <div className="pl-10">
                                                        <motion.p 
                                                            className="text-[var(--neutral-darker)] leading-relaxed"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2, delay: 0.1 }}
                                                        >
                                                            {faq.answer}
                                                        </motion.p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>

           
                </motion.div>
            </motion.div>
        </div>
    );
}