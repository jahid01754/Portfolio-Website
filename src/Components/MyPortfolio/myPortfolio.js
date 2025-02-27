import Image from "next/image";
import { useState } from "react";

export default function MyPortfolio() {
  const [selectedCategories, setSelectedCategories] = useState("All");

  const products = [
    {
      id: 1,
      name: "Portfolio One",
      category: "UI/UX Design",
      productImage: (
        <Image
          src={"/pic/portfolioOne.png"}
          alt={"Portfolio One Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 2,
      name: "Portfolio Two",
      category: "Graphic Design",
      productImage: (
        <Image
          src={"/pic/portfolioTwo.png"}
          alt={"Portfolio Two Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 3,
      name: "Portfolio Three",
      category: "UI/UX Design",
      productImage: (
        <Image
          src={"/pic/portfolioThree.png"}
          alt={"Portfolio Three Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 4,
      name: "Portfolio Four",
      category: "Web Design",
      productImage: (
        <Image
          src={"/pic/portfolioFour.png"}
          alt={"Portfolio Four Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 5,
      name: "Portfolio Five",
      category: "App Development",
      productImage: (
        <Image
          src={"/pic/portfolioFive.png"}
          alt={"Portfolio Five Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 6,
      name: "Portfolio Six",
      category: "Branding Design",
      productImage: (
        <Image
          src={"/pic/portfolioSix.png"}
          alt={"Portfolio Six Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 7,
      name: "Portfolio Seven",
      category: "Web Design",
      productImage: (
        <Image
          src={"/pic/portfolioSeven.png"}
          alt={"Portfolio Seven Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: 8,
      name: "Portfolio Eight",
      category: "App Development",
      productImage: (
        <Image
          src={"/pic/portfolioEight.png"}
          alt={"Portfolio Eight Image"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      ),
    },
  ];

  const categories = [
    "All",
    "UI/UX Design",
    "Branding Design",
    "Graphic Design",
    "App Development",
    "Web Design",
  ];

  const filteredProducts =
    setSelectedCategories === "All"
      ? products
      : products.filter((product) => product.category === selectedCategories);

  return (
    <>
      <div className="bg-white w-full h-[700px]">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-20">
              <Image
                src={"/pic/orangeDot.png"}
                alt="Orange Dot Icon"
                width={5}
                height={5}
                className="w-full h-auto max-w-5 max-h-5"
              />
              <p>My Portfolio</p>
            </div>
            <div>
              <p className="font-bold text-5xl mt-6 text-center">
                VISIT MY PORTFOLIO
              </p>
            </div>
          </div>

          {/* filter section of portfolio */}
          <div className="mt-10">
            {/* filter Heading */}
            <div className="flex flex-row justify-center items-center gap-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategories(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedCategories === category
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* filter body */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border rounded-lg text-center"
                  >
                    <Image
                      src={item.productImage}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                    <p className="mt-2 font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                ))
              ) : (
                <p>Products not found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
