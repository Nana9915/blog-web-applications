import Image from "next/image";

export const Header = () => {
  return (
    <header className=" w-[1216px] mx-auto">
      <div className="mt-[32px] flex items-center justify-around">
        <div>
          <Image width={158} height={36} src="/logo.png" />
        </div>
        <div className="flex gap-10 text-[#3B3C4A] font-normal text-base ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <input
            className="bg-[#F4F4F5] py-2 w-[166px] rounded-[5px] pl-4"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};
