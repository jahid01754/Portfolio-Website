export default function Navbar() {
  return (
    <>
      <div className="bg-stone-500 flex justify-items-center">
        <div className="bg-yellow-400">
          <p className="bg-yellow-400 h-10 w-fit text-rose-700">Choion</p>
        </div>
        <div className="bg-blue-400">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Resume</p>
          <p>portfolio</p>
          <p>Blog</p>
        </div>
        <div className="bg-red-400">
          <p>Contact Us</p>
        </div>
      </div>
    </>
  );
}
