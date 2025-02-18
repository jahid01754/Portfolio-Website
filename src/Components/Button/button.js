export default function Button({ label }) {
  return (
    <>
      <button className="bg-primary px-8 py-3 text-white rounded-lg text-lg group relative transition-all duration-700 overflow-hidden hover:text-orange-400 active:scale-105 font-bold">
        <span className="bg-black h-full w-full rounded-lg absolute top-0 left-0 z-[0] transition-all duration-700 -translate-x-[101%] group-hover:translate-x-0"></span>
        <span className="absolute bg-black h-full w-full rounded-lg top-0 right-0 z-[0] transition-all duration-700 translate-x-[101%] group-hover:translate-x-0"></span>
        <span className="relative z-[1]">{label}</span>
      </button>
    </>
  );
}
