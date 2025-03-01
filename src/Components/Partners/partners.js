import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

export default function Partners() {
  const partners = [
    {
      id: 1,
      partnerPic: "/pic/partnerOne.png",
    },
    {
      id: 2,
      partnerPic: "/pic/partnerTwo.png",
    },
    {
      id: 3,
      partnerPic: "/pic/partnerThree.png",
    },
    {
      id: 4,
      partnerPic: "/pic/partnerFour.png",
    },
    {
      id: 5,
      partnerPic: "/pic/partnerFive.png",
    },
    {
      id: 6,
      partnerPic: "/pic/partnerOne.png",
    },
    {
      id: 7,
      partnerPic: "/pic/partnerTwo.png",
    },
    {
      id: 8,
      partnerPic: "/pic/partnerThree.png",
    },
    {
      id: 9,
      partnerPic: "/pic/partnerFour.png",
    },
  ];
  return (
    <>
      <div className="bg-white w-full h-auto">
        <div className="container mx-auto overflow-hidden">
          {/* heading */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-20">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p>Partners</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">
                REPUTED PARTNER
              </p>
            </div>
          </div>

          {/* body */}
          <div className="relative mt-10">
            <Swiper
              slidesPerView={5}
              // breakpoints={{
              //   0: { slidesPerView: 2 },
              //   640: { slidesPerView: 3 },
              //   1024: { slidesPerView: 4 },
              // }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                el: ".custom-pagination", // Connect to the custom pagination container
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              modules={[Pagination, Autoplay]}
              className="relative"
            >
              {partners.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.partnerPic}
                      alt="Partner Icon"
                      width={100}
                      height={100}
                      className=""
                    />
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
