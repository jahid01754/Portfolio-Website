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
            <p className="font-bold text-5xl mt-6">10+ Years of Experience</p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row mt-20">
          {/* Vertical Line */}
          <div className="invisible lg:visible">
            <div className="">Vertical Straight Line</div>
            <div className="">circle Dot</div>
          </div>

          {/* Experience Description */}
          <div className="w-full">
            <div className="bg-white flex flex-row justify-between item-center  w-full h-auto gap-4">
              <div className="flex flex-col justify-center items-center p-4">
                <p>BSc in Computer Science</p>
                <p>University of ULAV (2018-2022)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>AS-Science & Information</p>
                <p>University of ULAV (2016-2018)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Secondary School Education</p>
                <p>kindergarten(2006-2016)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
            </div>
            <div className="bg-white flex flex-row justify-between items-center w-full h-auto mt-10">
              <div>
                <p>UI/UX Design</p>
                <p>Figma 90%</p>
                <p>Adobe XD 85%</p>
                <p>Photoshop 80%</p>
              </div>
              <div>
                <p>Web Developer</p>
                <p>WordPress 90%</p>
                <p>Mockplus 85%</p>
                <p>Weebly 80%</p>
              </div>
              <div>
                <p>App Development</p>
                <p>Quixy 92%</p>
                <p>AppyPie 87%</p>
                <p>iBuildApp 82%</p>
              </div>
            </div>
            <div className="bg-white flex flex-row justify-between items-center w-full h-auto gap-4 p-4 mt-10">
              <div className="flex flex-col justify-center items-center ">
                <p>Web Developer & Trainer</p>
                <p>Brac Developer Team-(2012-2016)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Front-end Developer</p>
                <p>Brane-(2020-2011)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>UI/UX Designer</p>
                <p>Google Out Tech-(2017-Present)</p>
                <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
