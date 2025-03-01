import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";

export default function ClientFeedback() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "John K. Meraz",
      designation: "CTO, XYZ Group",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      profilePic: (
        <Image
          src={"/pic/testimonialOne.png"}
          alt="Profile Pic"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] max-h-[80px]"
        />
      ),
    },
    {
      id: 2,
      name: "Johan Smith",
      designation: "CEO, ABC Agency",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      profilePic: (
        <Image
          src={"/pic/testimonialTwo.png"}
          alt="Profile Pic"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] max-h-[80px]"
        />
      ),
    },
    {
      id: 3,
      name: "Robert E. Wolf",
      designation: "Director, Techso",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      profilePic: (
        <Image
          src={"/pic/testimonialThree.png"}
          alt="Profile Pic"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] max-h-[80px]"
        />
      ),
    },
    {
      id: 4,
      name: "Johan Smith",
      designation: "CEO, ABC Agency",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      profilePic: (
        <Image
          src={"/pic/testimonialTwo.png"}
          alt="Profile Pic"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] max-h-[80px]"
        />
      ),
    },
    {
      id: 5,
      name: "Robert E. Wolf",
      designation: "Director, Techso",
      description:
        "Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      profilePic: (
        <Image
          src={"/pic/testimonialThree.png"}
          alt="Profile Pic"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] max-h-[80px]"
        />
      ),
    },
  ]);

  return (
    <>
      <div className="bg-white w-full h-[700px]">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-20">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p>Testimonial</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">
                CLIENT FEEDBACK
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="mt-20 relative">
            <Swiper
              className="custom-swiper"
              style={{
                "--swiper-pagination-color": "#ff6600",
              }}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {info.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#FFFAF7] hover:bg-[#fbefe8] flex flex-col justify-center px-10 py-8 rounded-lg select-none transition-colors duration-300 hover:shadow active:cursor-grab">
                    <div className="flex gap-5">
                      <div className="">{item.profilePic}</div>
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <p className="">{item.designation}</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-justify pt-5 text-slate-600 leading-[28px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
