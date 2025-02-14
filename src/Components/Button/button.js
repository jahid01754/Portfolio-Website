export default function Button() {
  return (
    <>
      {/* <button className="group relative overflow-hidden transition-all duration-1000 bg-orange-500 px-8 py-3 text-white text-lg rounded-lg hover:text-orange-500">
        <span className="z-[0] group-hover:translate-x-0 transition-all duration-1000 absolute top-0 -translate-x-full right-0 h-full w-full bg-black"></span>

        <span className="z-[0] group-hover:translate-x-0 transition-all duration-1000 absolute top-0 translate-x-full left-0 h-full w-full bg-black"></span>

        <span className="relative z-[10]">Contact Us</span>
      </button> */}

      {/* <button className="group relative overflow-hidden bg-blue-400 px-8 py-3 text-white text-lg rounded-lg transition-all duration-1000">
        <span className="bg-green-400 h-full w-full transition-all duration-1000 translate-x-full z-[0] top-0 absolute group-hover:translate-x-0 left-0"></span>
        <span className="absolute bg-green-400 h-full w-full transition-all duration-1000 -translate-x-full group-hover:translate-x-0 z-[0] top-0 right-0"></span>
        <span className="relative z-[1]">download my CV</span>
      </button> */}

      <button className="bg-primary px-8 py-3 text-white rounded-lg text-lg group relative transition-all duration-700 overflow-hidden hover:text-orange-400 active:scale-105">
        <span className="bg-black h-full w-full rounded-lg absolute top-0 left-0 z-[0] transition-all duration-700 -translate-x-[101%] group-hover:translate-x-0"></span>
        <span className="absolute bg-black h-full w-full rounded-lg top-0 right-0 z-[0] transition-all duration-700 translate-x-[101%] group-hover:translate-x-0"></span>
        <span className="relative z-[1]">Contact Us</span>
      </button>
    </>
  );
}
