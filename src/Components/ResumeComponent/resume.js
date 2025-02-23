import Image from "next/image";
export default function ResumeComponent() {
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
        <div className="lg:flex lg:flex-row mt-20">
          {/* Vertical Line */}
          <div className="invisible lg:visible">
            <div className="">Vertical Straight Line</div>
            <div className="">circle Dot</div>
          </div>

          {/* Experience Description */}
          <div className="w-full h-auto ">
            {/* 1st layer */}
            <div className="bg-white flex flex-col lg:flex-row justify-between item-center  w-full h-auto gap-4 rounded-lg">
              {/* 1st */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">BSc in Computer Science</p>
                <p className="text-stone-600">University of ULAV (2018-2022)</p>
                <p className="text-stone-600 break-words text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-[2px] h-36 bg-gray-300 invisible lg:visible"></div>
              </div>

              {/* 2nd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4 relative">
                <p className="font-bold text-xl">AS-Science & Information</p>
                <p className="text-stone-600">University of ULAV (2016-2018)</p>
                <p className="text-stone-600 break-words text-center">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
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
            <div className="bg-white flex flex-col lg:flex-row  justify-around items-start lg:items-center w-full h-auto mt-10 gap-4 rounded-lg">
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
            <div className="bg-white flex flex-col lg:flex-row justify-between items-center w-full h-auto gap-4 p-4 mt-10 rounded-lg">
              {/* 1st */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4">
                <p className="font-bold text-xl">Web Developer & Trainer</p>
                <p className="text-stone-600">
                  Brac Developer Team-(2012-2016)
                </p>
                <p className="text-stone-600">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>

              {/* 2nd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4">
                <p className="font-bold text-xl">Front-end Developer</p>
                <p className="text-stone-600">Brane-(2020-2011)</p>
                <p className="text-stone-600">
                  Pomnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>

              {/* 3rd */}
              <div className="flex flex-col justify-stretch items-center min-h-[200px] p-4">
                <p className="font-bold text-xl">UI/UX Designer</p>
                <p className="text-stone-600">Google Out Tech-(2017-Present)</p>
                <p className="text-stone-600">
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
