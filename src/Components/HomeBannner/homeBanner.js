import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button/button";
export default function HomeBanner() {
  return (
    <>
      <section className="bg-dynamic">
        <div className="container mx-auto bg-dynamic ">
          <div className=" flex flex-col lg:flex-row justify-between items-center px-4 w-[100%]  overflow-hidden">
            {/* Floating Particle */}
            <div className="flex justify-center items-center order-2 lg:order1">
              <Image
                src="/pic/particleOne.png"
                alt="Moving Particle"
                width="100"
                height="150"
                className="absolute top-48 left-[10%] animate-upDownFloat max-w-[90%] sm:max-w-[100px]"
              />
            </div>

            {/* Left Section */}
            <div className=" flex flex-col justify-center items-center order-2 lg:order1 mt-5 sm:mt-10">
              <div>
                <div className="flex justify-start items-center w-full">
                  <Image
                    src="/pic/orangeDot.png"
                    alt="Orange Dot"
                    width="25"
                    height="25"
                    className="left-0"
                  />

                  <h1 className="text-2xl ">I am a Frontend Developer</h1>
                </div>

                <div className="w-full mt-4 text-[50px] font-bold  ">
                  <span className="text-[90px]">
                    Creative Design and Web&nbsp;{" "}
                  </span>
                  <span className=" text-orange-500  text-[90px]">
                    <TypeAnimation
                      sequence={[
                        "Design", // First word
                        1000, // Wait 1s
                        "Solutions", // Second word
                        1000, // Wait 1s
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={false}
                    />
                  </span>
                </div>

                <div className="mt-4 text-[20px]">
                  <p className="text-justify">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et.
                  </p>
                </div>
                <div className="relative mt-10 mb-10 flex flex-row  items-center">
                  <Button label={"Download my CV"} />
                  <Image
                    src="/pic/particleTwo.png"
                    alt="Moving Particle"
                    width="100"
                    height="150"
                    className="absolute animate-upDownFloat -top-0 left-[60%]"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="z-[0] flex justify-center items-center order-1 lg:order-2">
              <div className="absolute animate-diagonalFloat top-48 right-88">
                {/* <div className="absolute top-14 right-auto animate-diagonalFloat translate-x-4  md:left-auto"> */}
                <Image
                  src="/pic/homeBannerShape.png"
                  alt="Background Image"
                  width="500"
                  height="700"
                />
              </div>

              <div className="relative">
                <Image
                  src="/pic/bannerimg.png"
                  alt="Overlay Image"
                  width="1550"
                  height="1800"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
