import Image from "next/image";

import { IoLocationSharp } from "react-icons/io5";

import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "../Button/button";

export default function MyContact() {
  return (
    <>
      <div className="bg-white w-full h-auto">
        <div className="container mx-auto">
          {/* heading */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-20">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p>My Contact</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">
                I WANT TO HEAR FROM YOU
              </p>
            </div>
          </div>

          {/* body */}
          <div className="flex flex-row justify-between items-start mt-10 gap-10">
            {/* from */}
            <div className="flex-1">
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:outline-2 focus:outline-slate-300  focus:ring-2 focus:ring-contactRing transition-all duration-300 focus:shadow-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:outline-2 focus:outline-slate-300  focus:ring-2 focus:ring-contactRing transition-all duration-300 focus:shadow-lg"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:outline-2 focus:outline-slate-300  focus:ring-2 focus:ring-contactRing transition-all duration-300 focus:shadow-lg"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:outline-2 focus:outline-slate-300  focus:ring-2 focus:ring-contactRing transition-all duration-300 focus:shadow-lg"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:outline-2 focus:outline-slate-300 focus:ring-2 focus:ring-contactRing transition-all duration-300 ease-in-out col-span-1 sm:col-span-2 min-h-40 focus:shadow-lg resize-y leading-normal"
                />
              </div>
            </div>

            {/* info */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-row  gap-4">
                <div className="bg-dynamic flex justify-center items-center w-14 h-auto rounded-md">
                  <IoLocationSharp className="text-primary w-8 h-auto" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Address</p>
                  <p>202 Dog Hill Lane Beloit, KS 6470</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="bg-dynamic flex justify-center items-center w-14 h-auto rounded-md">
                  <FaPhoneVolume className=" text-primary w-7 h-auto" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Phone</p>
                  <p>+01589634755</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="bg-dynamic flex justify-center items-center w-14 h-auto rounded-md">
                  <MdEmail className="text-primary w-7 h-auto" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Email</p>
                  <p>jahidulhasan01754@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10">
            <Button label={"Send Me Message"} />
          </div>
        </div>
      </div>
    </>
  );
}
