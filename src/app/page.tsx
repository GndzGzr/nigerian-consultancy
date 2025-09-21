"use client";
import Image from "next/image";
import { ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import HeroMain from "@/components/views/Home/HeroMain";
import TestimonialSection from "@/components/views/Home/TestimonialSection";
import FeatureSection from "@/components/views/Home/FeatureSection";
import FeatureListSection from "@/components/views/Home/FeaturesListSection";
import FAQSection from "@/components/views/Home/FAQSection";
import CTASection from "@/components/views/Home/CTASection";


export default function Home() {
  
  return (
    <div className="">
      <HeroMain />
      <TestimonialSection />
      <FeatureSection />
      <FeatureListSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

