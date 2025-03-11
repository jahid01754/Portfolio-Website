import Image from "next/image";

export default function ServiceSection() {
  const services = [
    {
      image: "/pic/serviceOne.png",
      title: "UI/UX Designer",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceTwo.png",
      title: "Mobile App",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceThree.png",
      title: "Graphic Design",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceFour.png",
      title: "Web Developer",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceFive.png",
      title: "SEO Optimization",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceSix.png",
      title: "WordPress Developer",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceSeven.png",
      title: "App Development",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
    {
      image: "/pic/serviceEight.png",
      title: "Business Strategy",
      description:
        "Hen our power of choice is untrammelled and when nothing prevents our being able",
    },
  ];
  return (
    <>
      <div className="bg-white mx-4 py-20" id="Services">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-2 justify-center items-center w-full">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p className=" text-center">My Service</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">
                Services I Offer
              </p>
            </div>
          </div>

          {/* Content */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border border-orange-200  w-full p-10 hover:bg-lightOrange transition-all duration-200 rounded-lg hover:shadow-sm "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={30}
                  height={30}
                  className="w-full h-auto max-w-14 max-h-14"
                />
                <p className="mt-4">{service.title}</p>
                <p className="mt-4 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
