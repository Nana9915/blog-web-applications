import Image from "next/image";

export const Slider = () => {
  return (
    <div className="mt-[100px] w-[1216px] mx-auto">
      <div className="mb-[151px]">
        <div className="relative">
          <Image
            src="/image.jpeg"
            width={1216}
            height={600}
            className=" rounded-xl"
          />
        </div>
        <div className="p-10 bg-[#FFFFFF] border-collapse border-solid border-[#E8E8EA] border w-[598px] rounded-[12px] shadow-[0px_12px_24px_-6px_#181A2A1F] absolute top-[710px] left-[430px]">
          <div className="bg-[#4B6BFB] inline-block rounded-[6px] px-[10px] py-[4px] font-medium text-[#FFFFFF] text-[14px] leading-[20px] mb-4">
            Technology
          </div>
          <div className="text-[#181A2A] font-semibold text-[36px] leading-10 mb-6">
            <p>
              Grid system for better <br /> Design User Interface
            </p>
          </div>
          <div className="font-normal text-base text-[#97989F]">
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
