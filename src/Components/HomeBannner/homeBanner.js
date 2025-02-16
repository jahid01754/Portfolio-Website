import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function HomeBanner() {
  return (
    <>
      <section className="bg-dynamic flex flex-col lg:flex-row justify-evenly">
        <div className="flex justify-center items-center order-2 lg:order1">
          <Image
            src="/pic/particleOne.png"
            alt="Moving Particle"
            width="100"
            height="150"
            className="absolute top-36 left-24  animate-upDownFloat"
          />
        </div>
        <div className="flex flex-col justify-center items-center order-2 lg:order1 mt-10">
          <div className="container flex flex-row items-center justify-start w-full">
            <Image
              src="/pic/orangeDot.png"
              alt="Orange Dot"
              width="25"
              height="25"
              className="left-0"
            />

            <h1 className="text-xl">I am a Frontend Developer</h1>
          </div>
          <div className="container mt-4 flex flex-row">
            <p className="text-black text-[50px] font-bold">
              Creative Design and Web
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Design",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Solutions",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              className=" text-[50px] md:text-4xl font-bold text-blue-600 inline-block"
              repeat={Infinity}
            />
          </div>
          <div>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <div className="absolute top-14 right-auto animate-diagonalFloat translate-x-4  md:left-auto">
            <Image
              src="/pic/homeBannerShape.png"
              alt="Background Image"
              width="300"
              height="200"
              className=""
            />
          </div>

          <div className="relative translate-x-4 md:left-auto">
            <Image
              src="/pic/bannerimg.png"
              alt="Overlay Image"
              width="500"
              height="800"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
