import Image from "next/image";
export default function ResumeComponent() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
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
      </div>
    </>
  );
}
