"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
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

    const socialLinks = [
        { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-600", label: "Facebook" },
        { icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-500", label: "Instagram" },
        { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-sky-500", label: "Twitter" },
        { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:text-blue-700", label: "LinkedIn" },
        { icon: FaYoutube, href: "https://youtube.com", color: "hover:text-red-500", label: "YouTube" }
    ];

    const quickLinks = [
        { name: "Visa Services", href: "/services" },
        { name: "Application Process", href: "/services#process" },
        { name: "About Us", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" }
    ];

    const supportLinks = [
        { name: "Visa Requirements", href: "/resources/requirements" },
        { name: "Application Guides", href: "/resources/guides" },
        { name: "Document Checklist", href: "/resources/checklist" },
        { name: "Processing Updates", href: "/resources/updates" },
        { name: "FAQ", href: "/resources/faq" }
    ];

    return (
        <footer className="container scheme-light px-8 lg:px-24 pt-8 pb-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--nigeria-green)] blur-3xl" />
                <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[var(--gold)] blur-3xl" />
            </div>

            <motion.div
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 mb-4">
                    {/* Company Info */}
                    <motion.div 
                        className="col-span-1 lg:col-span-4"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Logo */}
                        <motion.div
                            className="mb-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <motion.h5 
                                className=" font-bold bg-gradient-to-r from-[var(--nigeria-green)] to-[var(--gold)] bg-clip-text text-transparent font-serif"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Nigeria Visa Consultancy
                            </motion.h5>
                            <motion.p 
                                className="t text-[var(--neutral-dark)] mt-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                Your trusted partner for Nigerian visa applications in Turkey
                            </motion.p>
                        </motion.div>

                        {/* Address */}
                        <motion.div 
                            className="mb-8"
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <motion.div
                                    className="w-8 h-8 rounded-full bg-[var(--nigeria-green)]/10 flex items-center justify-center flex-shrink-0 mt-1"
                                    whileHover={{ scale: 1.1}}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaMapMarkerAlt className="text-[var(--nigeria-green)] text-sm" />
                                </motion.div>
                                <div>
                                    <p className="font-medium text-[var(--neutral-darkest)] mb-1">Office Address:</p>
                                    <p className="text-[var(--neutral-dark)] leading-relaxed">
                                        İlkadım Mahallesi, Dikmen Yıldızı Sokak No: 41/11<br />
                                        Çankaya/Ankara
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact */}
                        <motion.div 
                            className="mb-8"
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaPhone className="text-[var(--gold)] text-sm" />
                                    </motion.div>
                                    <div>
                                        <p className="font-medium text-[var(--neutral-darkest)]">Phone:</p>
                                        <motion.a 
                                            href="tel:+90-530-561-9919"
                                            className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            +90 (530) 561-9919
                                        </motion.a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-[var(--lima)]/10 flex items-center justify-center flex-shrink-0"
                                        whileHover={{ scale: 1.1}}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaEnvelope className="text-[var(--lima)] text-sm" />
                                    </motion.div>
                                    <div>
                                        <p className="font-medium text-[var(--neutral-darkest)]">Email:</p>
                                        <motion.a 
                                            href="mailto:vagontur@gmail.com"
                                            className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            vagontur@gmail.com
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="col-span-1"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <h3 className="font-semibold text-lg text-[var(--nigeria-green-darkest)] mb-6 font-serif">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300 hover:pl-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Support */}
                    <motion.div 
                        className="col-span-1"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-lg text-[var(--nigeria-green-darkest)] mb-6 font-serif">
                            Support & Resources
                        </h3>
                        <div className="flex flex-col gap-3">
                            {supportLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300 hover:pl-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>


                {/* Copyright */}
                <motion.div 
                    className="border-t border-[var(--nigeria-green)]/20 pt-4"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <motion.p 
                            className="text-[var(--neutral-dark)] text-center lg:text-left"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            &copy; {new Date().getFullYear()} Nigeria Visa Consultancy. All rights reserved. | 
                            <span className="ml-1">Licensed Visa Agency in Turkey</span>
                        </motion.p>
                        
                        <motion.div 
                            className="flex items-center gap-6 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <motion.a 
                                href="/privacy" 
                                className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300"
                                whileHover={{ y: -2 }}
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a 
                                href="/terms" 
                                className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300"
                                whileHover={{ y: -2 }}
                            >
                                Terms of Service
                            </motion.a>
                            <motion.a 
                                href="/cookies" 
                                className="text-[var(--neutral-dark)] hover:text-[var(--nigeria-green)] transition-colors duration-300"
                                whileHover={{ y: -2 }}
                            >
                                Cookie Policy
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
