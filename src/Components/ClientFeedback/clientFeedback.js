import Image from "next/image";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

// import "./styles.css";

export default function ClientFeedback() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "John K. Meraz",
      designation: "CTO, XYZ Group",
      description:
        "Contray to populart belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature fr 45 BC, make it over 2000 years old",
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
        "Contray to populart belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature fr 45 BC, make it over 2000 years old",
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
        "Contray to populart belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature fr 45 BC, make it over 2000 years old",
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
        "Contray to populart belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature fr 45 BC, make it over 2000 years old",
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
  ]);

  const paginationRef = useRef(null);
  return (
    <>
      <div className="bg-white w-full h-[700px]">
        <div className="bg-white container mx-auto">
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

          {/* body */}
          <div className="mt-20">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
                el: paginationRef.current,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              // navigation={true}
              modules={[Pagination, Navigation]}
              onInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
              }}
              className="relative pb-10 mySwiper"
            >
              {info.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#FFFAF7] hover:bg-[#fbefe8] flex flex-col justify-center px-10 py-8 rounded-lg select-none transition-colors duration-300 hover:shadow">
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
            <div
              ref={paginationRef}
              className="custom-pagination flex justify-center gap-3 mt-8"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
