import { ConsultButton } from "@/components/core/ButtonWIcon";
import Image from 'next/image';

export default function CTASection() {
    return (
        <div className="container scheme-dark-alt py-24 relative">
            <Image
                src="/images/green-texture.jpg"
                alt="Background texture"
                fill
                quality={100}
                className="object-cover opacity-20"
            />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="font-serif text-neutral-white mb-8">Ready to Start Your Visa Journey?</h2>
                <p className="font-sans s1 text-neutral-lighter mb-8 max-w-2xl mx-auto">
                    Contact Nigeria Visa Consultancy today for expert guidance and personalized consultation. 
                    Let us help you achieve your travel and immigration goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <ConsultButton />
                </div>
                
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                    <div className="child p-6 rounded-lg">
                        <div className="text-gold font-serif h5 mb-2">Free Consultation</div>
                        <p className="font-sans t text-neutral-lighter">Get expert advice tailored to your specific needs</p>
                    </div>
                    <div className="child p-6 rounded-lg">
                        <div className="text-gold font-serif h5 mb-2">Quick Response</div>
                        <p className="font-sans t text-neutral-lighter">We respond to all inquiries within 24 hours</p>
                    </div>
                    <div className="child p-6 rounded-lg">
                        <div className="text-gold font-serif h5 mb-2">Guaranteed Support</div>
                        <p className="font-sans t text-neutral-lighter">Ongoing assistance throughout your application</p>
                    </div>
                </div>
            </div>
        </div>
    );
}