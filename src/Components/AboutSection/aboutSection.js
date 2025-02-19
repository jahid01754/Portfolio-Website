import Image from "next/image";
export default function AboutSection() {
  return (
    <>
      <div className="bg-white mx-2 lg:order-1">
        <div className=" container mx-auto">
          <div className="flex flex-row justify-stretch py-40 gap-40 ">
            <div className="">
              <Image
                src={"/pic/about.png"}
                alt="About Pic"
                width={800}
                height={800}
                className="h-auto w-[600px] hover:brightness-75 transition duration-500"
              />
            </div>

            <div className="flex flex-col lg:order-2">
              <div className="flex flex-row gap-2 mt-20">
                <Image
                  src={"/pic/orangeDot.png"}
                  alt="Orange Dot"
                  width={20}
                  height={20}
                  className=""
                />
                <p>About ME</p>
              </div>

              <div className="text-[50px] font-bold">
                <p>I Can Design Anything You Want</p>
              </div>
              <div className="">
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mx-4">
        <div className="container mx-auto bg-yellow-400 h-[75vh] border border-red-500 flex flex-row justify-stretch">
          <div className="border border-black">first div</div>
          <div className="border border-red-500">second div</div>
        </div>
      </div> */}
    </>
  );
}
