import Image from "next/image";
import Link from "next/link";

export const BlogPosts = () => {
    return (

        <div className="w-[392px] h-[488px] rounded-xl p-4 border border-[#E8E8EA] ">
          <Image
            src="/photo.jpeg"
            className="object-cover rounded-md mb-4"
            width={360}
            height={240}
            alt=""
          />
          <div className="w-[360px] h-[200px] p-2">
            <div className="rounded-md bg-[#4B6BFB0D] inline-block py-1 px-[10px] mb-4">
              <p className="text-[#4B6BFB] font-medium text-sm">Design</p>
            </div>
            <div>
              <p className="text-[#181A2A] font-semibold text-2xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[28px] bg-[#97989F]"></div>
                <div>
                  <p className="font-medium text-base text-[#97989F]">
                    Ernie Smith
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#97989F] font-normal text-base">
                  August 20, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
     
    );
}