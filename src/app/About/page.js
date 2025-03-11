import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative w-full h-[300px]">
        <Image
          src={"/pic/innerPageHeroBg.png"}
          alt="Inner Page Hero"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      </div>
    </>
  );
}
