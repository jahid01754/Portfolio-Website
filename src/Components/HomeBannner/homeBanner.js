import Image from "next/image";
export default function HomeBanner() {
  return (
    <>
      <section className="bg-dynamic flex  ">
        <div className="flex flex-grow justify-center items-center">
          <p>writing Section</p>
        </div>
        <div className="flex flex-grow justify-center items-center relative">
          <div className="absolute top-14 right-auto animate-diagonalFloat">
            <Image
              src="/pic/homeBannerShape.png"
              alt="Background Image"
              width="300"
              height="200"
              className=""
            />
          </div>

          <div className="relative ">
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
