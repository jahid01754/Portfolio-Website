import Image from "next/image";
import Button from "../Button/button";
import { FaRegSquareCheck } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.1,
  });

  const [buttonRef, buttonInView] = useInView({
    threshold: 0.1,
  });
  return (
    <>
      <div className="bg-white border m-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-20 md:py-40 gap-10 md:gap-20">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src={"/pic/about.png"}
                alt="About pic"
                width={800}
                height={800}
                className="w-full h-auto max-w-[600px] hover:brightness-75 transition duration-500"
              />
            </div>
            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={"/pic/orangeDot.png"}
                  alt="About me icon"
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-lg font-semibold ">About Me</p>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold mb-6">
                I Can Design Anything You Want
              </h2>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                uod maxime placeat facere possimus, omnis voluptas assumenda
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis. Nam libero tempore, cum soluta nobis est eligendi
                optio cumque nihil impedit
              </p>

              {/* project and experience seciton */}
              <div className="flex flex-col lg:flex-row  mt-10 gap-2 lg:gap-16">
                {/* Complete Project Part */}
                <div className="flex gap-4 items-center">
                  <Image
                    src={"/pic/aboutIconOne.png"}
                    alt="First About Icon"
                    width={60}
                    height={60}
                    className="w-full h-auto max-w-[60px] max-h-[60px] flex-shrink-0 md:w-[50px] lg:w-[60px] lg:h-[60px]"
                  />
                  <div>
                    <h2 className="text-primary text-xl font-bold">0+</h2>
                    <h2 className="text-lg lg:text-xl font-semibold">
                      Complete Project
                    </h2>
                  </div>
                </div>

                {/* Year of Experience Part */}
                <div className="flex gap-4 items-center">
                  <Image
                    src={"/pic/aboutIconTwo.png"}
                    alt="Second About Icon"
                    width={60}
                    height={60}
                    className="max-w-[60px] max-h-[60px] flex-shrink-0 md:w-[50px]"
                  />
                  <div>
                    <h2 className="text-primary text-xl font-bold">0+</h2>
                    <h2 className="text-lg lg:text-xl font-semibold">
                      Year Of Experience
                    </h2>
                  </div>
                </div>
              </div>

              {/* Experience Description */}
              <div
                ref={experienceRef}
                className={`flex flex-col mt-10 lg:mt-20 gap-2 lg:gap-4 ${
                  experienceInView ? "animate-rise-up" : "opacity-0"
                }`}
              >
                {/* Upper Part */}
                <div className="flex flex-col lg:flex-row  gap-2  xl:gap-12 2xl:gap-14">
                  <div className="flex flex-row items-center lg:items-start  xl:items-center gap-2">
                    <FaRegSquareCheck className="text-orange-500" />
                    <p>Work Simple and Clean Design</p>
                  </div>
                  <div className="flex flex-row  items-center lg:items-start xl:items-center gap-2">
                    <FaRegSquareCheck className="text-orange-500" />
                    <p>Web Design Full Stack</p>
                  </div>
                </div>

                {/* Down Part */}
                <div className="flex flex-col lg:flex-row gap-2 xl:gap-3.5 2xl:gap-6">
                  <div className="flex flex-row  items-center lg:items-start xl:items-center gap-2">
                    <FaRegSquareCheck className="text-orange-500" />
                    <p>New Ideas and user Friendly design</p>
                  </div>
                  <div className="flex flex-row  items-center lg:items-start xl:items-center gap-2">
                    <FaRegSquareCheck className="text-orange-500" />
                    <p>Unlimited Revisions</p>
                  </div>
                </div>
              </div>
              <div
                ref={buttonRef} // Attach the ref to the button
                className={`mt-10 lg:mt-20 ${
                  buttonInView ? "animate-rise-up" : "opacity-0"
                }`}
              >
                <Button label={"Download my CV"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
