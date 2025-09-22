"use client";
import { ConsultButton } from "@/components/core/ButtonWIcon";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const resourcesDropdown = [
        {
            category: "Visa services",
            items: [
                { title: "Nigeria visas", subtitle: "Expert guidance for Nigerian visa applications", href: "/services#nigeria-visas" },
                { title: "Visa types", subtitle: "Comprehensive overview of visa categories", href: "/services#visa-types" },
                { title: "Application tips", subtitle: "Essential advice for smooth visa processing", href: "/services#application-tips" },
                { title: "Consultation", subtitle: "Professional support for your visa journey", href: "/services#consultation" }
            ]
        },
        {
            category: "Company resources",
            items: [
                { title: "Blog posts", subtitle: "Latest insights on visa regulations", href: "/resources" },
                { title: "Case studies", subtitle: "Successful visa application stories", href: "/resources#case-studies" },
                { title: "Guides", subtitle: "Comprehensive visa application guides", href: "/resources#guides" },
                { title: "Webinars", subtitle: "Expert immigration webinar recordings", href: "/resources#webinars" }
            ]
        },
        {
            category: "Latest updates",
            items: [
                { title: "Travel news", subtitle: "Current immigration policy updates", href: "/resources#travel-news" },
                { title: "Country info", subtitle: "Detailed travel destination insights", href: "/resources#country-info" },
                { title: "Regulations", subtitle: "Recent changes in visa requirements", href: "/resources#regulations" },
                { title: "Travel alerts", subtitle: "Important international travel notifications", href: "/resources#travel-alerts" }
            ]
        }
    ];

    return (
        <nav className="fixed pt-4 px-24 w-full z-50">
            <div className="px-4 py-2 rounded-full container scheme-dark w-full flex justify-start items-center gap-8 relative">
                <div className="text-2xl font-bold"><Link href="/">LOGO</Link></div>
                <div className="flex space-x-6">
                    <Link className="t" href="/services">Services</Link>
                    <Link className="t" href="/process">Process</Link>
                    <Link className="t" href="/about">About Us</Link>
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <Link className="t flex items-center" href="/resources">
                            Resources
                            <svg 
                                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-8 transition-all duration-200 ${
                            isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`} style={{ 
                            left: 'calc(-22rem)', 
                            width: 'calc(100vw - 13rem)',
                            transform: 'translateX(0)'
                        }}>
                            <div className="bg-[var(--nigeria-green-darkest)] border border-nigeria-green-dark rounded-lg shadow-2xl backdrop-blur-sm">
                                <div className="p-8">
                                    <div className="grid grid-cols-3 gap-12">
                                        {resourcesDropdown.map((section, sectionIndex) => (
                                            <div key={sectionIndex}>
                                                <h3 className="text-gold font-serif mb-6 text-sm font-semibold uppercase tracking-wide">
                                                    {section.category}
                                                </h3>
                                                <div className="space-y-4">
                                                    {section.items.map((item, itemIndex) => (
                                                        <Link
                                                            key={itemIndex}
                                                            href={item.href}
                                                            className="block p-3 rounded-lg hover:bg[var(--nigeria-green)] transition-colors group"
                                                        >
                                                            <div className="flex items-start">
                                                                <div className="w-2 h-2 bg[var(--lima)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                                <div>
                                                                    <div className="font-sans text-neutral-white text-sm font-medium group-hover:text-gold transition-colors">
                                                                        {item.title}
                                                                    </div>
                                                                    <div className="font-sans text-neutral-lighter text-xs mt-1">
                                                                        {item.subtitle}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Bottom CTA */}
                                    <div className="mt-8 pt-6 border-t border-nigeria-green-dark">
                                        <Link 
                                            href="/resources" 
                                            className="flex items-center justify-between p-4 bg[var(--nigeria-green-darker)] rounded-lg hover:bg[var(--nigeria-green)] transition-colors group max-w-md mx-auto"
                                        >
                                            <div>
                                                <div className="font-sans text-neutral-white text-sm font-medium">
                                                    View All Resources
                                                </div>
                                                <div className="font-sans text-neutral-lighter text-xs">
                                                    Access our complete resource library
                                                </div>
                                            </div>
                                            <svg 
                                                className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-self-end flex space-x-6 ml-auto">
                    <ConsultButton />
                </div>
            </div>
        </nav>
    );
}