

import { useState } from "react";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ReadMoreButton } from "@/components/core/DefaultButton";
import Carousel from "@/components/structured/Home/Carousel";
export default function TestimonialSection() {
    
    return (
        <div className="container scheme-light p-24 flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center text-center max-w-4xl ">
                <h6>Why choose us</h6>
                <h2 className="font-serif mt-8">Comprehensive Visa Services</h2>
                <p className="mt-3 mb-2 px-20">We offer end-to-end support for your Nigerian visa application. Our team ensures a smooth, hassle-free experience from initial consultation to final approval.</p>
                <ReadMoreButton />

            </div>
            <Carousel />
          




        </div>
    )
}