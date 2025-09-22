import HeaderSection from "@/components/views/About/HeaderSection";
import AboutSection from "@/components/views/About/AboutSection";
import TeamSection from "@/components/views/About/TeamSection";
import TimelineSection from "@/components/views/About/TimelineSection";
import TestimonialSection from "@/components/views/About/TestimonialSection";
import CTASection from "@/components/views/About/CTASection";

export default function About() {
  return (
    <div className="">
      <HeaderSection />
      <AboutSection />
      <TeamSection />
      <TimelineSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
