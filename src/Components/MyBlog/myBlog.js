import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MyBLog() {
  const blog = [
    {
      date: "20 January, 2023",
      title: "Become UX/UI Designer With Career Foundry.",
      cardPic: "/pic/blogOne.png",
    },
    {
      date: "15 January, 2023",
      title: "The Best App Development For  Agency.",
      cardPic: "/pic/blogTwo.png",
    },
    {
      date: "08 January, 2023",
      title: "The Best Portfolio Design for Business Agency.",
      cardPic: "/pic/blogThree.png",
    },
  ];

  return (
    <>
      <div className="bg-white w-full h-auto" id="Blog">
        <div className="container mx-auto">
          {/* heading */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-20">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p>My Blog</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">LATEST BLOG</p>
            </div>
          </div>

          {/* body */}
          <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly items-center mt-20  gap-10 mx-5">
            {blog.map((item, index) => (
              <div
                key={index}
                className="rounded-md border border-orange-200  h-full"
              >
                <div className="hover:brightness-50 transition-all duration-500">
                  <Image
                    src={item.cardPic}
                    alt="Blog One pic"
                    width={300}
                    height={300}
                    className="w-full h-auto "
                  />
                </div>
                <div className="px-10">
                  <p className="mt-10 text-slate-500">{item.date}</p>
                  <p className="mt-8 font-semibold  text-2xl hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </p>
                  <div>
                    <p className="mt-14 mb-6 flex flex-row justify-start items-center gap-4 text-orange-400 font-semibold group">
                      Read More{" "}
                      <span className="group-hover:translate-x-2 transition-transform duration-500">
                        {" "}
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
