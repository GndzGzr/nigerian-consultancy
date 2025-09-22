export default function ServicesSection() {
    const services = [
        {
            title: "Tourist Visa Assistance",
            description: "Complete support for tourist visa applications to popular destinations worldwide. We handle documentation, application submission, and follow-up.",
            features: ["Document preparation", "Application submission", "Embassy liaison", "Status tracking"]
        },
        {
            title: "Student Visa Services",
            description: "Specialized assistance for students seeking to study abroad. From university applications to visa approvals, we guide you through every step.",
            features: ["University liaison", "Document verification", "Interview preparation", "Visa processing"]
        },
        {
            title: "Business Visa Support",
            description: "Professional business visa services for entrepreneurs, investors, and business travelers seeking international opportunities.",
            features: ["Business documentation", "Investment verification", "Fast-track processing", "Corporate support"]
        },
        {
            title: "Family Reunion Visas",
            description: "Helping families reunite across borders with comprehensive family visa application support and guidance.",
            features: ["Relationship documentation", "Sponsorship assistance", "Legal compliance", "Application tracking"]
        }
    ];

    return (
        <div className="container scheme-light py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif gradient-text mb-8">Our Comprehensive Services</h2>
                    <p className="font-sans s1 max-w-3xl mx-auto">
                        Detailed descriptions of the specific services offered, such as visa processing, 
                        documentation assistance, interview preparation, and application tracking.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="child p-8 rounded-lg">
                            <h3 className="font-serif gradient-text mb-4">{service.title}</h3>
                            <p className="font-sans mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center font-sans t">
                                        <span className="text-nigeria-green mr-3">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}