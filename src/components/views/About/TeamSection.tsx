import Image from 'next/image';

export default function TeamSection() {
    const teamMembers = [

        {
            name: "Emre Çakıryılmaz",
            role: "Senior Advisor",
            expertise: "Management",
            image: "/images/IMG_20251021_124743.jpg",
            description: "Licensed immigration lawyer with extensive experience in complex visa cases and appeals."
        },
        {
            name: "Emre Olgun",
            role: "Senior Visa Consultant",
            expertise: "Visa Applications",
            image: "/images/IMG_20251021_124743.jpg",
            description: "Licensed immigration lawyer with extensive experience in complex visa cases and appeals."
        }
    ];

    return (
        <div className="container scheme-light-alt py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif gradient-text mb-8">Meet Our Expert Team</h2>
                    <p className="font-sans s1 max-w-3xl mx-auto">
                        Profiles of key team members, highlighting their expertise and roles within the company.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="child p-6 rounded-lg text-center">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h4 className="font-serif gradient-text mb-2">{member.name}</h4>
                            <p className="font-sans font-semibold text-nigeria-green mb-2">{member.role}</p>
                            <p className="font-sans s2 text-azure mb-4">{member.expertise}</p>
                            <p className="font-sans t">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}