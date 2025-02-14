"use client";
import { useState } from "react";
import HomeBanner from "@/Components/HomeBannner/homeBanner";
import Navbar from "@/Components/NavBar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
    </>
  );
}
