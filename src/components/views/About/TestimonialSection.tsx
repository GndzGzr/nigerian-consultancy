import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Sarah Okonkwo",
            role: "Student",
            destination: "Canada",
            image: "/images/avatar.jpg",
            quote: "Nigeria Visa Consultancy made my dream of studying in Canada a reality. Their expert guidance through the complex visa process was invaluable.",
            rating: 5
        },
        {
            name: "Ibrahim Hassan",
            role: "Business Professional",
            destination: "United Kingdom",
            image: "/images/avatar.jpg",
            quote: "Professional, reliable, and efficient. They helped me secure my UK business visa without any hassle. Highly recommended!",
            rating: 5
        },
        {
            name: "Grace Adebayo",
            role: "Tourist",
            destination: "Schengen Area",
            image: "/images/avatar.jpg",
            quote: "Excellent service! They handled all the paperwork for my European vacation visa. The team was responsive and knowledgeable.",
            rating: 5
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`text-xl ${index < rating ? 'text-gold' : 'text-neutral-light'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="container scheme-light py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif gradient-text mb-8">What Our Clients Say</h2>
                    <p className="font-sans s1 max-w-3xl mx-auto">
                        Client testimonials to reinforce credibility and client satisfaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="child p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="relative w-16 h-16 mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-serif gradient-text text-lg">{testimonial.name}</h4>
                                    <p className="font-sans t text-azure">{testimonial.role}</p>
                                    <p className="font-sans c text-nigeria-green">{testimonial.destination}</p>
                                </div>
                            </div>
                            
                            <div className="flex mb-4">
                                {renderStars(testimonial.rating)}
                            </div>
                            
                            <blockquote className="font-sans s2 italic text-neutral-dark">
                                {testimonial.quote}
                            </blockquote>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="child p-8 rounded-lg max-w-2xl mx-auto">
                        <h3 className="font-serif gradient-text mb-4">Join Thousands of Satisfied Clients</h3>
                        <p className="font-sans mb-4">Over 10,000+ successful visa applications processed with a 95% success rate.</p>
                        <div className="flex justify-center space-x-8 text-center">
                            <div>
                                <div className="font-serif h4 text-nigeria-green">10,000+</div>
                                <div className="font-sans t text-neutral-dark">Applications Processed</div>
                            </div>
                            <div>
                                <div className="font-serif h4 text-nigeria-green">95%</div>
                                <div className="font-sans t text-neutral-dark">Success Rate</div>
                            </div>
                            <div>
                                <div className="font-serif h4 text-nigeria-green">7+</div>
                                <div className="font-sans t text-neutral-dark">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}