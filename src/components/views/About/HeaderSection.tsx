import { ConsultButton } from "@/components/core/ButtonWIcon";
import Image from 'next/image';
export default function HeaderSection() {
    return (
        <div className="h-screen container scheme-light py-24 relative">
            <Image
                src="/images/green-texture.jpg"
                alt="Background texture"
                fill
                quality={100}
                priority
                className="object-cover"
            />
            <div className="text-center max-w-6xl mx-auto px-4 flex flex-col justify-center items-center h-full relative z-10">
                <h1 className="font-serif gradient-text">Trusted by students & travelers and many others</h1>
                <p className="font-sans  mt-6 mb-6">Our mission is to simplify the visa application process, providing expert guidance and support every step of the way.</p>
                <ConsultButton />
            </div>
        </div>
    );
}
