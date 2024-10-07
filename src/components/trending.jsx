import Image from "next/image";

export const Trending = () => {
  return (
    <div className="w-[1216px] mx-auto mb-[112px]">
      <div className="font-bold text-[#181A2A] text-[24px] leading-[28px]">
        <p>Trending</p>
      </div>
      <div>
        <div className="mt-[30px] relative">
          <Image
            className="rounded-xl h-[320px]"
            width={289}
            height={320}
            src="/mountain.png"
          />
        </div>
        <div className="absolute top-[1381px] w-[230px] ml-[28.5px]">
          <div className="bg-[#4B6BFB] rounded-[6px] px-[10px] py-1 inline-block mb-4">
            <p className="text-[#FFFFFF] text-[12px] leading-5 font-medium">
              Technology
            </p>
          </div>
          <div className="text-[#FFFFFF] text-[18px] leading-7 font-semibold">
            <p>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

