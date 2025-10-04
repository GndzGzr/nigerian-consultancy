import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Michael Chen",
            service: "Student Visa to Canada",
            image: "/images/avatar.jpg",
            quote: "The team made my student visa process incredibly smooth. Their expertise in Canadian immigration was evident throughout.",
            rating: 5
        },
        {
            name: "Aisha Mohammed",
            service: "Business Visa to UAE",
            image: "/images/avatar.jpg",
            quote: "Professional service from start to finish. They handled all the complex business documentation perfectly.",
            rating: 5
        },
        {
            name: "David Thompson",
            service: "Tourist Visa to Europe",
            image: "/images/avatar.jpg",
            quote: "Excellent support for my Schengen visa application. The process was transparent and efficient.",
            rating: 5
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`text-lg ${index < rating ? 'text-gold' : 'text-neutral-light'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="container scheme-light py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif gradient-text mb-8">Service Success Stories</h2>
                    <p className="font-sans s1 max-w-3xl mx-auto">
                        Real testimonials from clients who have used the consultancys services to obtain their visas.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="child p-6 rounded-lg text-center">
                            <div className="relative w-20 h-20 mx-auto mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            
                            <div className="flex justify-center mb-3">
                                {renderStars(testimonial.rating)}
                            </div>
                            
                            <blockquote className="font-sans s2 italic text-neutral-dark mb-4">
                                {testimonial.quote}
                            </blockquote>
                            
                            <div>
                                <h4 className="font-serif gradient-text">{testimonial.name}</h4>
                                <p className="font-sans t text-nigeria-green">{testimonial.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="child p-8 rounded-lg text-center">
                    <h3 className="font-serif gradient-text mb-4">Join Our Success Stories</h3>
                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                        <div>
                            <div className="font-serif h4 text-nigeria-green">500+</div>
                            <div className="font-sans t">Visas Processed Monthly</div>
                        </div>
                        <div>
                            <div className="font-serif h4 text-nigeria-green">50+</div>
                            <div className="font-sans t">Countries Covered</div>
                        </div>
                        <div>
                            <div className="font-serif h4 text-nigeria-green">24/7</div>
                            <div className="font-sans t">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}