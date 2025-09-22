



import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureListSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        }
    };

    const testimonials = [
        {
            rating: 5,
            quote: "The visa consultancy made my business expansion to Nigeria seamless! Their expertise and thorough document preparation saved me months of delays.",
            name: "Mehmet K.",
            role: "Business Owner",
            location: "Istanbul, Turkey",
            color: "from-[var(--nigeria-light)] to-[var(--nigeria-green-lighter)]"
        },
        {
            rating: 5,
            quote: "Exceptional service for family reunification visas. The team understood our unique situation and provided personalized guidance throughout the entire process.",
            name: "Amina O.",
            role: "Healthcare Professional",
            location: "Ankara, Turkey",
            color: "from-[var(--nigeria-lighter)] to-[var(--nigeria-green)]"
        },
        {
            rating: 5,
            quote: "As a digital nomad working between Turkey and Nigeria, their visa expertise has been invaluable. Professional, reliable, and always available when I needed support.",
            name: "David R.",
            role: "Tech Consultant",
            location: "Remote",
            color: "from-[var(--nigeria-green)] to-[var(--nigeria-green-dark)]"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <motion.span
                key={index}
                className={`text-2xl ${index < rating ? 'text-[var(--nigeria-green)]' : 'text-gray-300'}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
            >
                ★
            </motion.span>
        ));
    };

    return (
        <div className="container scheme-light py-24 px-8 lg:px-24 flex justify-center items-center flex-col relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--nigeria-green)] blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-[var(--gold)] blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
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
                    <p className="text-[var(--nigeria-green)] t font-medium">Client Stories</p>
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                    className="font-serif mb-8 max-w-4xl bg-gradient-to-r from-[var(--nigeria-green-darkest)] to-[var(--nigeria-green)] bg-clip-text text-transparent"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Real Success Stories from Our Clients
                </motion.h2>

                {/* Subtitle */}
                <motion.p 
                    className="leading-relaxed mb-8 text-[var(--neutral-darker)] max-w-3xl"
                    variants={itemVariants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Discover how our expertise has helped travelers and businesses achieve their visa goals with confidence.
                </motion.p>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        variants={cardVariants}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeOut", 
                            delay: index * 0.2 
                        }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <div className="backdrop-blur-sm rounded-2xl p-8 border border-[var(--nigeria-green-lightest)] hover:border-[var(--nigeria-green-darkest)] transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden">
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                            
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-6xl text-[var(--neutral-white)]/20 font-serif leading-none">
                                "
                            </div>

                            {/* Star Rating */}
                            <motion.div 
                                className="flex justify-center mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {renderStars(testimonial.rating)}
                            </motion.div>

                            {/* Testimonial Text */}
                            <motion.p 
                                className="italic text-[var(--neutral-darker)] leading-relaxed mb-8 text-center relative z-10 font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                {testimonial.quote}
                            </motion.p>

                            {/* Client Info */}
                            <motion.div 
                                className="flex flex-col items-center relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                {/* Avatar */}
                                <motion.div
                                    className="relative mb-4"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--nigeria-green)] to-[var(--nigeria-green-light)] p-0.5">
                                        <Image 
                                            src="/images/avatar.jpg" 
                                            alt={testimonial.name} 
                                            width={64} 
                                            height={64} 
                                            className="rounded-full w-full h-full object-cover" 
                                        />
                                    </div>
                                    {/* Status Indicator */}
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                </motion.div>

                                {/* Name */}
                                <h5 className="font-serif text-xl text-[var(--nigeria-green-darkest)] mb-1 font-bold">
                                    {testimonial.name}
                                </h5>
                                
                                {/* Role */}
                                <h6 className="text-sm text-[var(--nigeria-green)] font-medium mb-1">
                                    {testimonial.role}
                                </h6>
                                
                           
                            </motion.div>

                   
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
                className="mt-20 text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <motion.p 
                    className="text-[var(--neutral-darker)] mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Join hundreds of satisfied clients who have achieved their travel goals with our expert guidance.
                </motion.p>
                
                <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-[var(--nigeria-green)] to-[var(--nigeria-green-light)] text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto hover:cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <span>Share Your Story</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </motion.div>
        </div>
    );
}