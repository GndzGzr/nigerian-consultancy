export default function AboutSection() {
    return (
        <div className="container scheme-light py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif gradient-text mb-8">About Nigeria Visa Consultancy</h2>
                    <p className="font-sans s1 max-w-4xl mx-auto">
                        
                        We are a trusted partner in your journey to explore opportunities around the world.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-serif gradient-text mb-6">Our Mission</h3>
                        <p className="font-sans mb-6">
                            To simplify the visa application process and provide expert guidance that empowers individuals to achieve their travel and immigration goals with confidence and ease.
                        </p>
                        
                        <h3 className="font-serif gradient-text mb-6">Our Vision</h3>
                        <p className="font-sans">
                            To be the leading visa consultancy service, known for our integrity, expertise, 
                            and commitment to making global mobility accessible to everyone.
                        </p>
                    </div>
                    
                    <div className="child p-8 rounded-lg">
                        <h4 className="font-serif gradient-text mb-4">Why Choose Us?</h4>
                        <ul className="space-y-3 font-sans">
                            <li className="flex items-start">
                                <span className="text-nigeria-green mr-3">✓</span>
                                Expert knowledge of visa requirements and procedures
                            </li>
                            <li className="flex items-start">
                                <span className="text-nigeria-green mr-3">✓</span>
                                Personalized consultation tailored to your needs
                            </li>
                            <li className="flex items-start">
                                <span className="text-nigeria-green mr-3">✓</span>
                                Proven track record of successful applications
                            </li>
                            <li className="flex items-start">
                                <span className="text-nigeria-green mr-3">✓</span>
                                Ongoing support throughout the application process
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}