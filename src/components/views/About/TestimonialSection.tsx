import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Selim Gündüz",
            role: "Student",
            destination: "Türkiye",
            image: "/images/avatar.jpg",
            quote: " Nijerya konsolosluğu vize başvurumda bana sağladıkları mükemmel destek için minnettarım. Başvuru sürecini inanılmaz derecede kolaylaştırdılar ve her adımda yanımda oldular.",
            rating: 5
        },
        {
            name: "İbrahim Hasan",
            role: "Business Professional",
            destination: "Türkiye",
            image: "/images/avatar.jpg",
            quote: "Profesyonel, güvenilir ve etkili. Nijerya iş vize başvurumu sorunsuz bir şekilde almama yardımcı oldular. Şiddetle tavsiye ederim!",
            rating: 5
        },
        {
            name: "Zeynep Kaya",
            role: "Tourist",
            destination: "Schengen Area",
            image: "/images/avatar.jpg",
            quote: "Mükemmel hizmet! Nijerya tatil vize başvurum için tüm evrakları hallettiler. Ekip son derece ilgili ve bilgiliydi.",
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

            </div>
        </div>
    );
}