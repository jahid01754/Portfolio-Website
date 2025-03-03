import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
          <div className="flex flex-row justify-around items-center">
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none  focus:ring-2 focus:ring-orange-300 focus:shadow-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none  focus:ring-2 focus:ring-orange-300 focus:shadow-lg"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:ring-2 focus:ring-orange-300 focus:shadow-lg"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none  focus:ring-2 focus:ring-orange-300 focus:shadow-lg"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full p-4 border border-orange-200 rounded-md outline-none focus:ring-2 focus:ring-orange-300 col-span-1 sm:col-span-2 h-40 resize-none focus:shadow-lg"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-center ">
                <div>
                  <CiLocationOn />
                </div>
                <div>
                  <p>Address</p>
                  <p>202 Dog Hill Lane Beloit, KS 6470</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <FaPhoneVolume />
                </div>
                <div>
                  <p>Phone</p>
                  <p>+01589634755</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <MdEmail />
                </div>
                <div>
                  <p>Email</p>
                  <p>jahidulhasan01754@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
