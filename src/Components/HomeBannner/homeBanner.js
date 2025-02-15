import Image from "next/image";
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
        <div className="flex justify-center items-center order-2 lg:order1 mt-10">
          <div className="flex flex-row">
            <Image
              src="/pic/orangeDot.png"
              alt="Orange Dot"
              width="25"
              height="25"
              className="left-0"
            />

            <h1 className="text-xl">I am a Frontend Developer</h1>
          </div>
          <div></div>
          <div></div>
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
