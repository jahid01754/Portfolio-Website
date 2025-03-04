import Image from "next/image";

export default function FooterSection() {
  return (
    <>
      <div className="bg-slate-950">
        <div className="container mx-auto">
          <div>
            <Image
              src={"/pic/LogoWhite.png"}
              alt="Logo"
              width={100}
              height={100}
            />
            <p className="text-white">
              At vero eos at accusamus et iusto odio dign ducimus qui blanditiis
              praesentium volup deleniti atque corrupti quos dolores et
              molestias excepturi sint occaecati
            </p>
            <p className="text-white">credesign@gmail.com</p>
          </div>
          <div>
            <p className="text-white">Explore Link</p>
            <p className="text-white">About</p>
            <p className="text-white">Resume</p>
            <p className="text-white">Portfolio</p>
            <p className="text-white">Blog</p>
          </div>
          <div>
            <p className="text-white">My Services</p>
            <p className="text-white">UI/UX Design</p>
            <p className="text-white">Mobile App</p>
            <p className="text-white">Graphics Design</p>
            <p className="text-white">Web Developer</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
