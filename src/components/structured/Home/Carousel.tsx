

import { useState } from "react";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ReadMoreButton } from "@/components/core/DefaultButton";
import { GetStartedButton } from "@/components/core/ButtonWIcon";
const slides = [
    {
        id: 1,
        image: "/images/carousel-1.jpg",
        alt: "Slide 1",
        value: "Expert",
        title: "Expert Guidance",
        caption: "Personalized Consultation",
        content: "Our experienced consultants provide personalized advice to help you navigate the visa application process with ease.",

    },
    {
        id: 2,
        image: "/images/carousel-2.jpg",
        alt: "Slide 2",
        value: "Support",
        title: "Personalized Support",
        caption: "Tailored Assistance",
        content: "We tailor our services to meet your unique needs, ensuring a smooth and hassle-free application process from start to finish.",

    },
    {
        id: 3,
        image: "/images/carousel-3.jpg",
        alt: "Slide 3",
        value: "Fast",
        title: "Fast Processing",
        caption: "Efficient Service",
        content: "Our streamlined processes ensure that your visa application is processed quickly and efficiently, minimizing delays and maximizing your chances of success.",
    },
]
export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (<div className="mt-32  mx-auto">
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-16">
            {slides.map((slide, index) => (
                <button
                    key={slide.id}
                    className={`group hover:cursor-pointer
                  }`}
                    onClick={() => setActiveIndex(index)}
                >
                    {slide.title}
                    <div className={`${index === activeIndex ? "w-full" : "w-0"} group-hover:w-full w-0 h-0.5 bg-foreground transition-width duration-300`}></div>
                </button>
            ))}
        </div>

        {/* Slide content */}
        <div className="relative">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`transition-opacity duration-500 ${index === activeIndex
                        ? "opacity-100 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 pointer-events-none"
                        }`}
                >
                    <div className="grid grid-cols-2 gap-16">
                        <div className="col-span-1 w-full h-120 relative">
                            <Image src={slide.image} alt={slide.alt} fill={true} objectFit="contain" />
                        </div>
                        <div className="flex flex-col justify-center ">
                            <h6 className="text-nigeria-green font-semibold">{slide.value}</h6>
                            <h3 className="font-serif mt-6">{slide.caption}</h3>
                            <p className="mt-8">{slide.content}</p>
                            <div className="flex flex-row gap-1 mt-6">
                                <ReadMoreButton />
                                <GetStartedButton />
                            </div>
                        </div>




                    </div>

                </div>
            ))}

        </div>
    </div>)
};