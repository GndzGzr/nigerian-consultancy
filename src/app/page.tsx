"use client";
import Image from "next/image";
import { ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroMain from "@/components/views/Home/HeroMain";
import TestimonialSection from "@/components/views/Home/TestimonialSection";
import FeatureSection from "@/components/views/Home/FeatureSection";
import FeatureListSection from "@/components/views/Home/FeaturesListSection";
import FAQSection from "@/components/views/Home/FAQSection";
import CTASection from "@/components/views/Home/CTASection";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create smooth scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

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
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--nigeria-green-light)]/10 via-transparent to-[var(--gold)]/5" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--lima)]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--gold)]/5 blur-3xl" />
      </motion.div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <HeroMain />
        </motion.section>

        {/* Testimonial Section with enhanced styling */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--neutral-lightest)] to-[var(--azure-lightest)] opacity-50" />
          <div className="relative z-10">
            <TestimonialSection />
          </div>
        </motion.section>

        {/* Feature Section with enhanced background */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--nigeria-green-darkest)] via-[var(--nigeria-green-darker)] to-[var(--azure-darkest)]" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[var(--gold)]/10 blur-2xl" />
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[var(--lima)]/10 blur-2xl" />
          </div>
          <div className="relative z-10">
            <FeatureSection />
          </div>
        </motion.section>

        {/* Features List Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--neutral-white)] to-[var(--neutral-lightest)]" />
          <div className="relative z-10">
            <FeatureListSection />
          </div>
        </motion.section>

        {/* FAQ Section with enhanced styling */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--neutral-lighter)] via-[var(--azure-lighter)] to-[var(--neutral-lighter)]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[var(--nigeria-green)]/10 blur-xl" />
            <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-[var(--gold)]/10 blur-xl" />
          </div>
          <div className="relative z-10">
            <FAQSection />
          </div>
        </motion.section>

        {/* CTA Section with final styling */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--nigeria-green-darkest)] via-[var(--nigeria-green)] to-[var(--nigeria-green-light)]" />
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--gold)]/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[var(--lima)]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative z-10">
            <CTASection />
          </div>
        </motion.section>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--lima)] transform-gpu z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Floating Back to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--nigeria-green)] to-[var(--nigeria-green-light)] flex items-center justify-center shadow-2xl cursor-pointer z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-4 h-4 text-[var(--nigeria-green-lightest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

