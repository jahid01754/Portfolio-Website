"use client";

import AboutSection from "@/Components/AboutSection/aboutSection";
import HomeBanner from "@/Components/HomeBannner/homeBanner";
import Navbar from "@/Components/NavBar/navbar";
import ServiceSection from "@/Components/Service/service";
import ResumeComponent from "@/Components/ResumeComponent/resume";
import ClientFeedback from "@/Components/ClientFeedback/clientFeedback";

export default function Home() {
  return (
    <>
      <div className="bg-dynamic h-full">
        <Navbar />
        <HomeBanner />
        <AboutSection />
        <ServiceSection />
        <ResumeComponent />
        <ClientFeedback />
      </div>
    </>
  );
}
