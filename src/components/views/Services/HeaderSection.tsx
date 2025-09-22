import { ConsultButton } from "@/components/core/ButtonWIcon";
import Image from 'next/image';

export default function HeaderSection() {
    return (
        <div className="h-screen container scheme-dark py-24 relative">
            <Image
                src="/images/hero.jpg"
                alt="Visa consultation services"
                fill
                quality={100}
                priority
                className="object-cover opacity-30"
            />
            <div className="text-center max-w-6xl mx-auto px-4 flex flex-col justify-center items-center h-full relative z-10">
                <h1 className="font-serif text-neutral-white mb-8">Professional Visa Services</h1>
                <p className="font-sans s1 text-neutral-lighter mt-6 mb-6 max-w-4xl">
                    Introduction to the service provided by Nigeria Visa Consultancy, 
                    emphasizing their expertise and experience.
                </p>
                <ConsultButton />
            </div>
        </div>
    );
}