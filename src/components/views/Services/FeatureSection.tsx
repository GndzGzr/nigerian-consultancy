import Image from 'next/image';

export default function FeatureSection() {
    return (
        <div className="container scheme-light-alt py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif gradient-text mb-8">Why Choose Our Services?</h2>
                        <p className="font-sans s1 mb-8">
                            Highlight the unique selling points of key services and key information 
                            that sets Nigeria Visa Consultancy apart from competitors.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-nigeria-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-neutral-white font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-serif gradient-text mb-2">Expert Consultation</h4>
                                    <p className="font-sans t">Personalized guidance from certified visa consultants with years of experience.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-azure rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-neutral-white font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-serif gradient-text mb-2">Document Verification</h4>
                                    <p className="font-sans t">Thorough document review and verification to ensure accuracy and completeness.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-nigeria-green-darkest font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-serif gradient-text mb-2">Application Tracking</h4>
                                    <p className="font-sans t">Real-time updates on your application status with dedicated support throughout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative h-96 lg:h-full">
                        <Image
                            src="/images/carousel-2.jpg"
                            alt="Professional visa consultation"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}