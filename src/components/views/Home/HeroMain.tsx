import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { ConsultButton } from "@/components/core/ButtonWIcon";
import { LearnMoreButton } from "@/components/core/DefaultButton";
import { GlobeEuropeAfricaIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { GlobeIcon, PlaneIcon } from "@/components/core/NCIcons";

export default function HeroMain() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0
    }
  };

  return (
    <div className="min-h-screen container scheme-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[var(--gold)] blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[var(--lima)] blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 p-8 lg:p-24 min-h-screen items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content Section */}
        <motion.div 
          className="col-span-1 flex flex-col justify-start items-start space-y-4"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >


          {/* Main Heading */}
          <motion.div 
            className="font-serif leading-tight"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="block">Your Trusted Partner</h2>
            <h3 className="block text-[var(--neutral-lighter)] ">
              for Nigeria Visa Services in Turkey
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="font-sans text-[var(--neutral-lighter)] leading-relaxed max-w-2xl"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Simplifying the visa process with expert guidance, personalized support, and proven success every step of the way.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap gap-8 py-6"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {[
              { number: "5000+", label: "Successful Applications" },
              { number: "98%", label: "Success Rate" },
              { number: "7+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-[var(--gold)] font-serif">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--neutral-lighter)] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <ConsultButton />
            <LearnMoreButton />
         
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="col-span-1 flex justify-center items-center relative"
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="relative">
            {/* Background decoration */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-br from-[var(--nigeria-green)]/80 to-[var(--nigeria-green)]/20 rounded-3xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main image container */}
            <motion.div
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ perspective: 1000 }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Professional consultation for Nigeria visa services"
                width={400}
                height={300}
                className="object-cover w-full h-100"
                priority
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--nigeria-green-darkest)]/20 via-transparent to-[var(--gold)]/10" />
            </motion.div>

            {/* Floating elements */}
            <PlaneIcon />
            <GlobeIcon />
       

          
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}