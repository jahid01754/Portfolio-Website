import Image from "next/image";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

export default function FooterSection() {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4  items-start py-20 space-y-10 md:space-y-0 px-7">
            <div className=" col-span-2 md:col-span-1 ">
              <Image
                src={"/pic/LogoWhite.png"}
                alt="Logo"
                width={100}
                height={100}
              />
              <p className="text-white text-wrap w-full md:w-[40%]  mt-8">
                At vero eos at accusamus et iusto odio dign ducimus qui
                blanditiis praesentium volup deleniti atque corrupti quos
                dolores et molestias excepturi sint occaecati
              </p>
              <p className="text-white text-2xl mt-8">credesign@gmail.com</p>
            </div>
            <div className="">
              <p className="text-white text-2xl">Explore Link</p>
              <div className="mt-8 space-y-8">
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  About
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Resume
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Portfolio
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Blog
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-2xl">My Services</p>
              <div className="mt-8 space-y-8">
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  UI/UX Design
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Mobile App
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Graphics Design
                </p>
                <p className="text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                  Web Developer
                </p>
              </div>
            </div>
            <div>
              <p className="text-white text-2xl">Follow Me</p>
              <div className="space-y-8">
                <div className="flex flex-row gap-4 mt-8">
                  <FaFacebookF className="bg-primary hover:bg-white text-white hover:text-primary w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300" />
                  <FaTwitter className="bg-primary hover:bg-white text-white hover:text-primary w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300" />
                  <FaDribbble className="bg-primary hover:bg-white text-white hover:text-primary w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300" />
                  <FaBehance className="bg-primary hover:bg-white text-white hover:text-primary w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300" />
                </div>
                <div className="flex flex-row gap-3">
                  <IoLocationSharp className="text-primary text-3xl md:text-2xl" />
                  <p className="text-white">
                    202 Dog Hill Lane Beloit,KS 67420
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <FaPhoneVolume className="text-primary text-2xl" />
                  <p className="text-white">1-800-915-6270</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 w-full h-[1px]"></div>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-7 pb-7 space-y-4">
            <div>
              <p className="text-white">
                All rights reserved &copy; 2025 Credesign
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-white hover:text-primary transition-colors duration-300">
                Terms & Condition
              </p>
              <p className="text-white hover:text-primary transition-colors duration-300">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
