import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MyPortfolio() {
  const [selectedCategories, setSelectedCategories] = useState("All");

  const products = [
    {
      id: 1,
      name: "Portfolio One",
      category: "UI/UX Design",
      productImage: "/pic/portfolioOne.png",
    },
    {
      id: 2,
      name: "Portfolio Two",
      category: "Graphic Design",
      productImage: "/pic/portfolioTwo.png",
    },
    {
      id: 3,
      name: "Portfolio Three",
      category: "UI/UX Design",
      productImage: "/pic/portfolioThree.png",
    },
    {
      id: 4,
      name: "Portfolio Four",
      category: "Web Design",
      productImage: "/pic/portfolioFour.png",
    },
    {
      id: 5,
      name: "Portfolio Five",
      category: "App Development",
      productImage: "/pic/portfolioFive.png",
    },
    {
      id: 6,
      name: "Portfolio Six",
      category: "Branding Design",
      productImage: "/pic/portfolioSix.png",
    },
    {
      id: 7,
      name: "Portfolio Seven",
      category: "Web Design",
      productImage: "/pic/portfolioSeven.png",
    },
    {
      id: 8,
      name: "Portfolio Eight",
      category: "App Development",
      productImage: "/pic/portfolioEight.png",
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
    selectedCategories === "All"
      ? products
      : products.filter((product) => product.category === selectedCategories);

  return (
    <div className="bg-white w-full" id="Portfolio">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-2 w-full ">
            <Image
              src={"/pic/orangeDot.png"}
              alt="Orange Dot Icon"
              width={5}
              height={5}
              className="w-full h-auto max-w-5 max-h-5"
            />
            <p>My Portfolio</p>
          </div>
          <p className="font-bold text-5xl mt-6 text-center">
            VISIT MY PORTFOLIO
          </p>
        </div>

        {/* Filter Section */}
        <div className="mt-10 px-2 flex flex-col justify-center items-center">
          {/* Filter Heading */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center items-center gap-6 overflow-hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategories(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  selectedCategories === category
                    ? "bg-primary text-white hover:text-black"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter Body with Animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <motion.div
                    key={item.id}
                    className={`relative rounded-lg h-[350px] overflow-hidden group my-2 ${
                      item.id == 8 ? "lg:col-span-2" : ""
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.productImage}
                      alt={item.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-lg object-cover"
                    />

                    {/* Overlay from Top */}
                    <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full flex justify-center items-center transition-transform duration-500 transform -translate-y-full group-hover:translate-y-0"></div>

                    {/* Overlay Text from Bottom */}
                    <div className="absolute bg-primary bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[40%] flex flex-col justify-center items-center transition-transform duration-500 transform translate-y-[200%] group-hover:translate-y-0 rounded-lg">
                      <p className="text-white text-center">{item.category}</p>
                      <p className="text-white text-center font-bold">
                        The Best way to impress your web
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p>Products not found</p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
