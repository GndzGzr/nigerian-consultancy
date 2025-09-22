export default function FeatureListSection() {
    const visaServices = [
        {
            category: "Tourist & Travel Visas",
            services: [
                "Tourist Visa Assistance",
                "Transit Visa Support",
                "Multiple Entry Visas",
                "Emergency Travel Documents"
            ]
        },
        {
            category: "Educational Visas",
            services: [
                "Student Visa Assistance",
                "Exchange Program Visas",
                "Research Visa Support",
                "Academic Conference Visas"
            ]
        },
        {
            category: "Business & Work Visas",
            services: [
                "Business Visa Processing",
                "Work Permit Assistance",
                "Investment Visa Support",
                "Corporate Travel Solutions"
            ]
        },
        {
            category: "Family & Immigration",
            services: [
                "Family Reunion Visas",
                "Spouse Visa Assistance",
                "Immigration Consultation",
                "Permanent Residency Support"
            ]
        }
    ];

    return (
        <div className="container scheme-dark py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-neutral-white mb-8">Complete Visa Services</h2>
                    <p className="font-sans s1 text-neutral-lighter max-w-3xl mx-auto">
                        List of key visa services including Tourist Visa Assistance, Student Visa Assistance, 
                        Travel Visa Assistance, Comprehensive Support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {visaServices.map((category, index) => (
                        <div key={index} className="child p-6 rounded-lg">
                            <h3 className="font-serif text-gold mb-6 h5">{category.category}</h3>
                            <ul className="space-y-3">
                                {category.services.map((service, idx) => (
                                    <li key={idx} className="flex items-start font-sans t text-neutral-lighter">
                                        <span className="text-lima mr-3 flex-shrink-0">•</span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <div className="child p-8 rounded-lg max-w-2xl mx-auto">
                        <h3 className="font-serif text-gold mb-4">Need Something Specific?</h3>
                        <p className="font-sans text-neutral-lighter mb-4">
                            Don't see your visa type listed? We handle specialized and unique visa applications too.
                        </p>
                        <button className="secondary-btn px-6 py-3 rounded-full font-sans">
                            Contact Us for Custom Solutions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}