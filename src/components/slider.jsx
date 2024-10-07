import Image from "next/image";

export const Slider = () => {
  return (
    <header>
      <div className="mt-[100px] w-[1216px] mx-auto mb-[100px]">
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

        <div className="flex gap-[9px] mt-[11px] ml-[1127px]">
          <div>
            <a href="#">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="5.5"
                  stroke="#696A75"
                />
                <path
                  d="M23.5 27L16 19.5L23.5 12"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="#">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="5.5"
                  stroke="#696A75"
                />
                <path
                  d="M16 12L23.5 19.5L16 27"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
