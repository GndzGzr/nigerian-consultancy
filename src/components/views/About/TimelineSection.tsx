export default function TimelineSection() {
    const milestones = [
        {
            year: "2018",
            title: "Company Founded",
            description: "Nigeria Visa Consultancy was established with a mission to simplify visa applications for Nigerians."
        },
        {
            year: "2019",
            title: "First 1000 Clients",
            description: "Successfully processed over 1000 visa applications with a 95% success rate."
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Launched online consultation services and digital document processing platform."
        },
        {
            year: "2021",
            title: "Partnership Expansion",
            description: "Established partnerships with embassies and consulates across 15 countries."
        },
        {
            year: "2022",
            title: "10,000+ Successful Applications",
            description: "Reached milestone of 10,000+ successful visa applications processed."
        },
        {
            year: "2025",
            title: "Industry Leadership",
            description: "Recognized as one of Nigeria's leading visa consultancy services with nationwide presence."
        }
    ];

    return (
        <div className="container scheme-dark py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-neutral-white mb-8">Our Journey</h2>
                    <p className="font-sans s1 max-w-3xl mx-auto text-neutral-lighter">
                        Company milestones and achievements over the years.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gold to-lima"></div>
                    
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-nigeria-green-darkest"></div>
                                
                                {/* Content */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="child p-6 rounded-lg">
                                        <div className="text-gold font-serif h5 mb-2">{milestone.year}</div>
                                        <h4 className="font-serif text-neutral-white mb-3">{milestone.title}</h4>
                                        <p className="font-sans t text-neutral-lighter">{milestone.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}