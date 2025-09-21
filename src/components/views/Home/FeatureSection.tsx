



import Image from "next/image";

export default function FeatureSection() {

    return (
        <div className="container scheme-dark p-24 flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center text-center max-w-4xl ">
                <h6>Our Services</h6>
                <h2 className="font-serif mt-8 max-w-2xl">Comprehensive visa solutions for every traveler</h2>
                <p className="mt-3 max-w-2xl">We provide tailored visa services to meet your specific travel needs and requirements.</p>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-8 mt-16">
                    <div className="flex flex-col justify-start items-center text-center ">
                        <div className="w-full h-56 relative">
                            <Image src="/images/carousel-1.jpg" alt="Consultation" fill className="object-cover rounded-lg" />
                        </div>

                        <h5 className="font-serif mt-4">Consultation</h5>
                        <p className="mt-2">Expert advice on visa options and requirements.</p>

                    </div>
                    <div className="flex flex-col justify-start items-center text-center">
                        <div className="w-full h-56 relative">
                            <Image src="/images/carousel-2.jpg" alt="Documentation" fill className="object-cover rounded-lg" />
                        </div>
                        <h5 className="font-serif mt-4">Documentation</h5>
                        <p className="mt-2">Assistance with visa application forms and supporting documents.</p>

                    </div>
                    <div className="flex flex-col justify-start items-center text-center">
                        <div className="w-full h-56 relative">
                            <Image src="/images/carousel-3.jpg" alt="Processing" fill className="object-cover rounded-lg" />
                        </div>
                        <h5 className="font-serif mt-4">Processing</h5>
                        <p className="mt-2">Expedited processing of visa applications for timely approvals.</p>

                    </div>

                </div>
            </div>






        </div>
    )
}