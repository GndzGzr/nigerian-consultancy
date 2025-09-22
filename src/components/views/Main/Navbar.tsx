"use client";
import { ConsultButton } from "@/components/core/ButtonWIcon";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const resourcesDropdown = [
        {
            category: "Visa services",
            items: [
                { title: "Nigeria visas", subtitle: "Expert guidance for Nigerian visa applications", href: "/services#nigeria-visas" },
                { title: "Visa types", subtitle: "Comprehensive overview of visa categories", href: "/services#visa-types" },
                { title: "Application tips", subtitle: "Essential advice for smooth visa processing", href: "/services#application-tips" },
                { title: "Consultation", subtitle: "Professional support for your visa journey", href: "/services#consultation" }
            ]
        },
        {
            category: "Company resources",
            items: [
                { title: "Blog posts", subtitle: "Latest insights on visa regulations", href: "/resources" },
                { title: "Case studies", subtitle: "Successful visa application stories", href: "/resources#case-studies" },
                { title: "Guides", subtitle: "Comprehensive visa application guides", href: "/resources#guides" },
                { title: "Webinars", subtitle: "Expert immigration webinar recordings", href: "/resources#webinars" }
            ]
        },
        {
            category: "Latest updates",
            items: [
                { title: "Travel news", subtitle: "Current immigration policy updates", href: "/resources#travel-news" },
                { title: "Country info", subtitle: "Detailed travel destination insights", href: "/resources#country-info" },
                { title: "Regulations", subtitle: "Recent changes in visa requirements", href: "/resources#regulations" },
                { title: "Travel alerts", subtitle: "Important international travel notifications", href: "/resources#travel-alerts" }
            ]
        }
    ];

    return (
        <motion.nav 
            className="fixed pt-6 px-6 md:px-12 lg:px-24 w-full z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className={`px-6 py-3 rounded-2xl container scheme-dark w-full flex justify-between items-center relative transition-all duration-300 ${
                    isScrolled ? 'shadow-2xl backdrop-blur-lg bg-opacity-95' : 'shadow-lg'
                }`}
                animate={{
                    scale: isScrolled ? 0.98 : 1,
                    y: isScrolled ? 2 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Logo Section */}
                <motion.div 
                    className="text-2xl lg:text-3xl font-bold font-serif"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--lima)] flex items-center justify-center">
                            <span className="text-[var(--nigeria-green-darkest)] font-bold text-sm">N</span>
                        </div>
                        <span className="bg-gradient-to-r from-[var(--gold)] via-[var(--lima)] to-[var(--gold)] bg-clip-text text-transparent">
                            NigeriaConsult
                        </span>
                    </Link>
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {[
                        { href: "/services", label: "Services" },
                        { href: "/process", label: "Process" },
                        { href: "/about", label: "About Us" }
                    ].map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link 
                                className="t font-medium hover:text-[var(--gold)] transition-colors duration-300 relative group" 
                                href={link.href}
                            >
                                {link.label}
                                <motion.div 
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--lima)] group-hover:w-full transition-all duration-300"
                                    whileHover={{ width: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    ))}
                    
                    {/* Resources Dropdown */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <Link className="t font-medium hover:text-[var(--gold)] transition-colors duration-300 flex items-center group" href="/resources">
                            Resources
                            <motion.svg 
                                className="ml-1 w-4 h-4"
                                animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                            <motion.div 
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--lima)] group-hover:w-full transition-all duration-300"
                                whileHover={{ width: "100%" }}
                            />
                        </Link>
                        
                        {/* Enhanced Dropdown Menu */}
                        <AnimatePresence>
                            {isResourcesOpen && (
                                <motion.div 
                                    className="absolute top-full left-0 mt-4"
                                    style={{ 
                                        left: 'calc(-24rem)', 
                                        width: 'calc(100vw - 8rem)',
                                        maxWidth: '64rem'
                                    }}
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    <div className="bg-[var(--nigeria-green-darkest)]/95 backdrop-blur-xl border border-[var(--nigeria-green-dark)]/50 rounded-2xl shadow-2xl overflow-hidden">
                                        <div className="p-8">
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                                {resourcesDropdown.map((section, sectionIndex) => (
                                                    <motion.div 
                                                        key={sectionIndex}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: sectionIndex * 0.1 }}
                                                    >
                                                        <h3 className="text-[var(--gold)] font-serif mb-6 text-sm font-semibold uppercase tracking-wider">
                                                            {section.category}
                                                        </h3>
                                                        <div className="space-y-2">
                                                            {section.items.map((item, itemIndex) => (
                                                                <motion.div
                                                                    key={itemIndex}
                                                                    whileHover={{ scale: 1.02, x: 4 }}
                                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                                >
                                                                    <Link
                                                                        href={item.href}
                                                                        className="block p-4 rounded-xl hover:bg-[var(--nigeria-green)]/20 transition-all duration-300 group border border-transparent hover:border-[var(--nigeria-green-light)]/20"
                                                                    >
                                                                        <div className="flex items-start">
                                                                            <motion.div 
                                                                                className="w-2 h-2 bg-[var(--lima)] rounded-full mt-2 mr-3 flex-shrink-0"
                                                                                whileHover={{ scale: 1.5 }}
                                                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                                            />
                                                                            <div>
                                                                                <div className="font-sans text-[var(--neutral-white)] text-sm font-medium group-hover:text-[var(--gold)] transition-colors duration-300">
                                                                                    {item.title}
                                                                                </div>
                                                                                <div className="font-sans text-[var(--neutral-lighter)] text-xs mt-1 group-hover:text-[var(--neutral-lightest)] transition-colors duration-300">
                                                                                    {item.subtitle}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                                
                                                {/* View All Resources - Right Column */}
                                                <motion.div 
                                                    className="flex flex-col justify-center"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <h3 className="text-[var(--gold)] font-serif mb-6 text-sm font-semibold uppercase tracking-wider">
                                                        Quick Access
                                                    </h3>
                                                    <motion.div
                                                        whileHover={{ scale: 1.02 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                    >
                                                        <Link 
                                                            href="/resources" 
                                                            className="flex flex-col p-6 bg-gradient-to-br from-[var(--nigeria-green)] to-[var(--nigeria-green-dark)] rounded-xl hover:from-[var(--nigeria-green-light)] hover:to-[var(--nigeria-green)] transition-all duration-300 group border border-[var(--nigeria-green-light)]/20"
                                                        >
                                                            <div className="flex items-center justify-between mb-3">
                                                                <div className="font-sans text-[var(--neutral-white)] text-lg font-semibold">
                                                                    View All Resources
                                                                </div>
                                                                <motion.svg 
                                                                    className="w-6 h-6 text-[var(--gold)]" 
                                                                    fill="none" 
                                                                    stroke="currentColor" 
                                                                    viewBox="0 0 24 24"
                                                                    whileHover={{ x: 4 }}
                                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </motion.svg>
                                                            </div>
                                                            <div className="font-sans text-[var(--neutral-lighter)] text-sm mb-4">
                                                                Access our complete resource library with guides, case studies, and latest updates.
                                                            </div>
                                                            <div className="flex items-center space-x-2 text-[var(--gold)] text-xs font-medium">
                                                                <span>Browse Library</span>
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div
                        className="hidden md:block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <ConsultButton />
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            className="w-6 h-0.5 bg-[var(--gold)] rounded-full"
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 4 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-[var(--gold)] rounded-full"
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-[var(--gold)] rounded-full"
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -4 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-6 right-6 mt-4"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-[var(--nigeria-green-darkest)]/95 backdrop-blur-xl border border-[var(--nigeria-green-dark)]/50 rounded-2xl p-6 shadow-2xl">
                            <div className="space-y-6">
                                {/* Mobile Navigation Links */}
                                {[
                                    { href: "/services", label: "Services" },
                                    { href: "/process", label: "Process" },
                                    { href: "/about", label: "About Us" },
                                    { href: "/resources", label: "Resources" }
                                ].map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block py-3 px-4 text-lg font-medium hover:text-[var(--gold)] transition-colors duration-300 border-b border-[var(--nigeria-green-dark)]/30 last:border-b-0"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4 border-t border-[var(--nigeria-green-dark)]/30"
                                >
                                    <ConsultButton />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}