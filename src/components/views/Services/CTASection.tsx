import { ConsultButton } from "@/components/core/ButtonWIcon";
import Image from 'next/image';

export default function CTASection() {
    const contactMethods = [
        {
            title: "Phone Consultation",
            description: "Speak directly with our visa experts",
            action: "+234 123 456 7890"
        },
        {
            title: "Email Support",
            description: "Get detailed information via email",
            action: "info@nigeriavisaconsultancy.com"
        },
        {
            title: "Office Visit",
            description: "Visit our offices for in-person consultation",
            action: "Schedule Appointment"
        }
    ];

    return (
        <div className="container scheme-dark-alt py-24 relative">
            <Image
                src="/images/carousel-3.jpg"
                alt="Contact consultation"
                fill
                quality={100}
                className="object-cover opacity-20"
            />
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-neutral-white mb-8">Ready to Start Your Application?</h2>
                    <p className="font-sans s1 text-neutral-lighter mb-8 max-w-3xl mx-auto">
                        Contact Nigeria Visa Consultancy for assistance with their visa application 
                        or to schedule a consultation with our expert team.
                    </p>
                    <ConsultButton />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="child p-6 rounded-lg text-center">
                            <h3 className="font-serif text-gold mb-3 h5">{method.title}</h3>
                            <p className="font-sans t text-neutral-lighter mb-4">{method.description}</p>
                            <div className="font-sans s2 text-neutral-white">{method.action}</div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center child p-8 rounded-lg">
                    <h3 className="font-serif text-gold mb-4">Free Initial Consultation</h3>
                    <p className="font-sans text-neutral-lighter mb-6">
                        Get started with a complimentary 30-minute consultation to discuss your visa requirements 
                        and understand the best path forward for your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="primary-btn px-6 py-3 rounded-full font-sans">
                            Book Free Consultation
                        </button>
                        <button className="secondary-btn px-6 py-3 rounded-full font-sans">
                            Download Service Guide
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}