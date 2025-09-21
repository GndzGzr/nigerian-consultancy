"use client";
import Image from "next/image";
import { ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import HeroMain from "@/components/views/Home/HeroMain";
import TestimonialSection from "@/components/views/Home/TestimonialSection";


export default function Home() {
  
  return (
    <div className="">
      <HeroMain />
      <TestimonialSection />

    </div>
  );
}

