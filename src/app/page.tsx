import Hero from "@/components/sections/Hero";
import ValuePillars from "@/components/sections/ValuePillars";
import TreatmentsGrid from "@/components/sections/TreatmentsGrid";
import DoctorSection from "@/components/sections/DoctorSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <TreatmentsGrid />
      <DoctorSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
