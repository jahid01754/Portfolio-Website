import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ResumeComponent() {
  const [layerOneRef, layerOneInView] = useInView({
    threshold: 0.2,
  });
  const [layerTwoRef, layerTwoInView] = useInView({
    threshold: 0.2,
  });
  const [layerThreeRef, layerThreeInView] = useInView({
    threshold: 0.2,
  });
  const [resume, setResume] = useState(false);
  useEffect(() => {
    // if (layerOneInView || layerTwoInView || layerThreeInView) {
    //   setResume(true);
    // } else {
    //   setResume(false);
    // }
    setResume(layerOneInView || layerTwoInView || layerThreeInView);
  }, [layerOneInView, layerTwoInView, layerThreeInView]);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="flex flex-row gap-2 justify-center items-center w-full">
            <Image
              src={"/pic/orangeDot.png"}
              alt="Orange Dot Icon"
              width={5}
              height={5}
              className="w-full h-auto max-w-5 max-h-5"
            />
            <p className="">My Resume</p>
          </div>
          <div>
            <p className="font-bold text-5xl mt-6 text-center">
              10+ Years of Experience
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row mt-20 px-4">
          {/* Vertical Line and Circle  */}

          <div className="invisible lg:visible relative">
            <div className="absolute bg-gray-400 w-[2px] h-full"></div>
            <div className="absolute bg-orange-600 w-4 h-4 rounded-full top-[110px] -translate-x-[7px]"></div>
            <div className="absolute bg-orange-600 w-4 h-4 rounded-full top-[348px] -translate-x-[7px]"></div>
            <div className="absolute bg-orange-600 w-4 h-4 rounded-full bottom-[110px] -translate-x-[7px]"></div>
          </div>
          <div className="flex flex-col justify-around px-8 invisible lg:visible">
            <p className="text-gray-700 font-bold ">Education</p>
            <p className="text-gray-700 font-bold text-nowrap">
              Software Skills
            </p>
            <p className="text-gray-700 font-bold">Experience</p>
          </div>

          {/* Experience Description */}
          <div className="w-full h-auto ">
            {/* 1st layer */}
            <div
              ref={layerOneRef}
              className={`bg-white flex flex-col lg:flex-row justify-between item-center  w-full h-auto gap-4 rounded-lg ${
                layerOneInView ? "animate-rise-up" : "opacity-0"
              }`}
            >
              {/* 1st */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">BSc in Computer Science</p>
                <p className="text-stone-600">University of ULAV (2018-2022)</p>
                <p className="text-stone-600 break-words text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
                {/* verticle Line */}
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-[2px] h-36 bg-gray-300 invisible lg:visible"></div>
              </div>

              {/* 2nd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">AS-Science & Information</p>
                <p className="text-stone-600">University of ULAV (2016-2018)</p>
                <p className="text-stone-600 break-words text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
                {/* verticle Line */}
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-[2px] h-36 bg-gray-300 invisible lg:visible"></div>
              </div>

              {/* 3rd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4">
                <p className="font-bold text-xl">Secondary School Education</p>
                <p className="text-stone-600">kindergarten(2006-2016)</p>
                <p className="text-stone-600 break-words text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </div>

            {/* 2nd layer */}
            <div
              ref={layerTwoRef}
              className={`bg-white flex flex-col lg:flex-row  justify-around items-start lg:items-center w-full h-auto mt-10 gap-4 rounded-lg ${
                layerTwoInView ? "animate-rise-up" : "opacity-0"
              }`}
            >
              {/* 1st */}
              <div className="flex flex-col justify-stretch items-center w-full min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">UI/UX Design</p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>Figma</span>
                  <span className="flex-1 border border-gray-300 mx-2 "></span>
                  <span>90%</span>
                </p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>Adobe XD</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>85%</span>
                </p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>Photoshop</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>80%</span>
                </p>
                {/* verticle Line */}
                <div className="absolute bg-gray-300 w-[2px] h-36 -right-2 top-1/2 transform -translate-y-1/2 invisible lg:visible"></div>
              </div>

              {/* 2nd */}
              <div className="flex flex-col justify-stretch items-center w-full min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">Web Developer</p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>WordPress</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>90%</span>
                </p>
                <p className="text-stone-600 container flex justify-center items-center w-full">
                  <span>Mockplus</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>85%</span>
                </p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>Weebly</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>80%</span>
                </p>
                {/* verticle Line */}
                <div className="absolute bg-gray-300 w-[2px] h-36 -right-2 top-1/2 transform -translate-y-1/2 invisible lg:visible"></div>
              </div>

              {/* 3rd */}
              <div className="flex flex-col justify-stretch items-center w-full min-h-[200px] p-4">
                <p className="font-bold text-xl">App Development</p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>Quixy</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>92%</span>
                </p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>AppyPie</span>
                  <span className="inline-block border border-gray-300 mx-2 w-[78%]"></span>
                  <span>87%</span>
                </p>
                <p className="text-stone-600 container flex justify-between items-center w-full">
                  <span>iBuildApp</span>
                  <span className="flex-1 border border-gray-300 mx-2"></span>
                  <span>82%</span>
                </p>
              </div>
            </div>

            {/* 3rd layer */}
            <div
              ref={layerThreeRef}
              className={`bg-white flex flex-col lg:flex-row justify-between items-center w-full h-auto gap-4 p-4 mt-10 rounded-lg ${
                layerThreeInView ? "animate-rise-up" : "opacity-0"
              }`}
            >
              {/* 1st */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">Web Developer & Trainer</p>
                <p className="text-stone-600">
                  Brac Developer Team-(2012-2016)
                </p>
                <p className="text-stone-600 text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
                {/* straight Line */}
                <div className="absolute bg-gray-300 w-[2px] h-36 -right-2 top-1/2 transform -translate-y-1/2 invisible lg:visible"></div>
              </div>

              {/* 2nd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">Front-end Developer</p>
                <p className="text-stone-600">Brane-(2020-2011)</p>
                <p className="text-stone-600 text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
                <div className="absolute bg-gray-300 w-[2px] h-36 -right-2 top-1/2 transform -translate-y-1/2 invisible lg:visible"></div>
              </div>

              {/* 3rd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4">
                <p className="font-bold text-xl">UI/UX Designer</p>
                <p className="text-stone-600">Google Out Tech-(2017-Present)</p>
                <p className="text-stone-600 text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
