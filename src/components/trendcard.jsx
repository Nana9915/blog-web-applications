import Image from "next/image";
 
export const TrendCard = () => {
    return (
      <div className="mt-[30px] relative overflow-hidden h-[320px] w-[289px] rounded-xl">
        <Image
          className="h-full w-full object-cover"
          width={289}
          height={320}
          src="/mountain.png"
          alt=""
        />
        <div className="bg-[#141624]/40 absolute inset-0" />
        <div className="absolute  w-[230px] bottom-[28px] left-[28.5px]">
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
    );
}