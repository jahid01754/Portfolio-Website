import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button/button";
export default function HomeBanner() {
  return (
    <>
      <section className="bg-dynamic" id="#">
        <div className="relative flex justify-center items-center w-full">
          <Image
            src="/pic/particleOne.png"
            alt="Moving Particle"
            width="100"
            height="150"
            className="absolute animate-upDownFloat w-[4vw] max-w-[120px] min-w-[50px] h-auto left-[5%]
               top-[16vh] md:top-[6vh] sm:top-[-5vh] xs:top-[-15vh]"
          />
        </div>
        <div className="container mx-auto bg-dynamic ">
          <div className="flex flex-col lg:flex-row justify-between items-center px-4 w-[100%]  overflow-hidden">
            {/* Floating Particle */}

            {/* Left Section */}
            <div className=" flex flex-col justify-center items-center order-2 lg:order1 mt-5 sm:mt-10">
              <div>
                <div className="flex justify-start items-center w-full gap-2">
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
                  <span className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-bold">
                    Creative Design and Web{""}
                  </span>
                  <span className=" text-orange-500  text-[50px] md:text-[70px] lg:text-[90px]">
                    <TypeAnimation
                      sequence={[
                        "Design", // First word
                        1000, // Wait 1s
                        "Solution", // Second word
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
                  <p className="text-justify lg:text-[18px]">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et.
                  </p>
                </div>
                <div className="mt-10 ">
                  <Button label={"Download my CV"} />
                </div>
              </div>
              <Image
                src={"/pic/particleTwo.png"}
                alt="Moving particle two"
                width={75}
                height={75}
                className="animate-upDownFloat  mr-20"
              />
            </div>

            {/* Right Section */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 w-full ">
              <div className="absolute  w-fit h-auto">
                {/* <div className="absolute top-14 right-auto animate-diagonalFloat translate-x-4  md:left-auto"> */}
                <Image
                  src="/pic/homeBannerShape.png"
                  alt="Background Image"
                  width="500"
                  height="700"
                  className="animate-diagonalFloat"
                />
              </div>

              <div className="relative ">
                <Image
                  src="/pic/bannerimg.png"
                  alt="Overlay Image"
                  width="1550"
                  height="1800"
                  className="w-full h-auto lg:min-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
