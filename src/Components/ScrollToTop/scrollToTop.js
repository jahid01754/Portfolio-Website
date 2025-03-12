"use client";

import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    setTimeout(toggleVisibility, 0);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-10 w-10 transition-opacity ${
            visible ? " opacity-100 " : " opacity-0 pointer-events-none "
          }`}
        >
          <FaArrowCircleUp className="w-full h-auto text-primary" />
        </button>
      </div>
    </>
  );
}
