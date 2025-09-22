import { FeatureIcon } from "@/components/core/NCIcons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        }
    };

    const services = [
        {
            image: "/images/carousel-1.jpg",
            alt: "Professional Consultation",
            icon: "bag",
            title: "Expert Consultation",
            description: "Professional guidance from certified visa specialists with years of experience.",
            features: ["One-on-one consultation", "Document assessment", "Success strategy planning"]
        },
        {
            image: "/images/carousel-2.jpg",
            alt: "Documentation Services",
            icon: "document",
            title: "Documentation Support",
            description: "Complete assistance with visa application forms and supporting documents.",
            features: ["Form completion", "Document verification", "Quality assurance"]
        },
        {
            image: "/images/carousel-3.jpg",
            alt: "Processing Services",
            icon: "lightning",
            title: "Fast Processing",
            description: "Expedited processing of visa applications for timely approvals and peace of mind.",
            features: ["Priority handling", "Status tracking", "Quick turnaround"]
        }
    ];

    return (
        <div className="container scheme-dark py-24 px-8 lg:px-24 flex justify-center items-center flex-col relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[var(--lima)] blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--nigeria-green)]/20 blur-3xl" />
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
                    <p className="text-[var(--neutral-lightest)] t font-medium">Our Services</p>
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                    className="font-serif  mb-8 max-w-4xl bg-gradient-to-r from-[var(--neutral-white)] to-[var(--nigeria-green-light)]  bg-clip-text text-transparent"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Comprehensive Visa Solutions for Every Traveler
                </motion.h2>

                {/* Subtitle */}
                <motion.p 
                    className="leading-relaxed mb-16 text-[var(--neutral-lighter)] max-w-3xl"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    We provide tailored visa services to meet your specific travel needs and requirements with professional expertise.
                </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        variants={cardVariants}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeOut", 
                            delay: index * 0.2 
                        }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="bg-[var(--nigeria-green-darker)]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--nigeria-green-light)]/20 hover:border-[var(--gold)]/40 transition-all duration-500 group-hover:shadow-2xl">
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={service.image} 
                                    alt={service.alt} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nigeria-green-darkest)]/80 via-transparent to-transparent" />
                                
                                {/* Icon Overlay */}
                                <FeatureIcon str={service.icon} />
                            
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <motion.h3 
                                    className="font-serif text-2xl lg:text-3xl mb-4 text-[var(--neutral-white)] group-hover:text-[var(--gold)] transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {service.title}
                                </motion.h3>
                                
                                <p className="text-[var(--neutral-lighter)] leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-[var(--neutral-lighter)]"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: featureIndex * 0.1 }}
                                        >
                                            <div className="w-2 h-2 bg-[var(--lima)] rounded-full mr-3 flex-shrink-0" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                           
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

           
           
        </div>
    );
}