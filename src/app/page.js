"use client";

import AboutSection from "@/Components/AboutSection/aboutSection";
import HomeBanner from "@/Components/HomeBannner/homeBanner";
// import Navbar from "@/Components/NavBar/navbar";
import ServiceSection from "@/Components/Service/service";
import ResumeComponent from "@/Components/ResumeComponent/resume";
import ClientFeedback from "@/Components/ClientFeedback/clientFeedback";
import MyPortfolio from "@/Components/MyPortfolio/myPortfolio";
import Partners from "@/Components/Partners/partners";
import MyBLog from "@/Components/MyBlog/myBlog";
import MyContact from "@/Components/MyContact/myContact";
import FooterSection from "@/Components/FooterSection/footerSection";
import ScrollToTop from "@/Components/ScrollToTop/scrollToTop";

export default function Home() {
  return (
    <>
      <div className="bg-dynamic h-full">
        <HomeBanner />
        <ScrollToTop />
        <AboutSection />
        <ServiceSection />
        <ResumeComponent />
        <ClientFeedback />
        <MyPortfolio />
        <Partners />
        <MyBLog />
        <MyContact />
        <FooterSection />
      </div>
    </>
  );
}
