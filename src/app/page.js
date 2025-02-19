"use client";

import AboutSection from "@/Components/AboutSection/aboutSection";
import HomeBanner from "@/Components/HomeBannner/homeBanner";
import Navbar from "@/Components/NavBar/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-red-500 h-full">
        <Navbar />
        <HomeBanner />
        <AboutSection />
      </div>
    </>
  );
}
