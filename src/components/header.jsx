import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className=" w-[1216px] mx-auto">
      <div className="py-8 flex items-center justify-between">
        <div> 
          <Link href="/">
            <Image width={158} height={36} src="/logo.png" />
          </Link>
        </div>
        <div className="flex gap-10 text-[#3B3C4A] font-normal text-base ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <input
            className="bg-[#F4F4F5] w-40 h-9  rounded-[5px] pl-4"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};
