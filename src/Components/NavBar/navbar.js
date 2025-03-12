import Link from "next/link";
import Button from "../Button/button";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const NavLink1 = ({ href, children }) => (
    //function for Navigation Link
    <a href={href} className="group overflow-hidden py-5 ">
      {children}
      <div className="transition-all duration-500 w-full bg-btn -translate-x-[101%] group-hover:translate-x-0 h-[2px]"></div>
    </a>
  );
  return (
    <>
      <div className=" w-full bg-dynamic md:bg-white py-8 mx-2">
        <nav className="container mx-auto  flex justify-between h-[85px]  bg-dynamic md:bg-white  top-0 m ">
          <div className="flex  justify-center items-center px-4">
            <Link href={"/"}>
              <Image
                src="/pic/Logo.png"
                alt="Logo"
                width="100"
                height="100"
                className="h-fit w-fit"
              />
            </Link>
          </div>
          <div className="hidden md:flex  justify-center items-center gap-6  ">
            <NavLink1 href="#">Home</NavLink1>
            <NavLink1 href="#About">About</NavLink1>
            <NavLink1 href="#Services">Services</NavLink1>
            <NavLink1 href="#Resume">Resume</NavLink1>
            <NavLink1 href="#Portfolio">Portfolio</NavLink1>
            <NavLink1 href="#Blog">Blog</NavLink1>
          </div>
          <div className="hidden md:flex justify-center items-center  ">
            <Link href={"#mycontact"}>
              <Button label={"Contact Us"} />
            </Link>
          </div>
          <div className="md:hidden flex items-center justify-center px-4">
            <GrMenu
              className={`cursor-pointer w-8 h-8 ${menu ? "hidden" : ""}`}
              onClick={() => setMenu(true)}
            />
            <MdClose
              className={`cursor-pointer w-8 h-8 ${menu ? "" : "hidden"}`}
              onClick={() => setMenu(false)}
            />
          </div>
        </nav>
        <div
          className={`absolute left-0 w-full bg-stone-800/50 backdrop-blur text-white transition-all duration-500 ease-in-out overflow-hidden md:hidden z-[10]
          ${menu ? "max-h-[500px]  py-6" : "max-h-[0]  py-0"}`}
        >
          <div className="flex flex-col items-start px-10  ">
            <NavLink1 href="#">Home</NavLink1>
            <NavLink1 href="#About">About</NavLink1>
            <NavLink1 href="#Services">Services</NavLink1>
            <NavLink1 href="#Resume">Resume</NavLink1>
            <NavLink1 href="#Portfolio">Portfolio</NavLink1>
            <NavLink1 href="#Blog">Blog</NavLink1>
          </div>
        </div>
      </div>
    </>
  );
}
