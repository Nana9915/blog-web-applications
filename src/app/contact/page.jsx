const ContactUs = () => {
    return (
      <div className="w-[895px] h-[895px] mx-auto mb-[100px]">
        <div className="px-[72.5px] pt-[14px] pb-10 w-[769px] h-[389px] mx-auto">
          <div>
            <p className="font-semibold text-4xl text-[#000000]">Contact Us</p>
            <p className="text-[#696A75] font-normal text-base mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="mt-5 flex gap-[50px] py-[10px]">
            <div className="p-4 border border-[#E8E8EA] rounded-xl w-[294px] ">
              <p className="font-semibold text-[#000000] text-2xl">Address</p>
              <p className="font-normal text-[#696A75] text-lg mt-[10px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="p-4 border border-[#E8E8EA] rounded-xl w-[294px] ">
              <p className="font-semibold text-[#000000] text-2xl">Contact</p>
              <p className="font-normal text-[#696A75] text-lg mt-[10px]">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F7] rounded-[10px] w-[643px] h-[440px] pt-[29px] pl-[35px] mx-auto">
          <div className="mb-6">
            <p className="font-semibold text-[#000000] text-lg ">
              Leave a Message
            </p>
          </div>
          <div className="flex gap-7 mb-[21px]">
            <input
              type="text"
              name="q"
              className="pl-[18px] py-[7px] border border-[#DCDDDF] bg-[#FFFFFF] rounded-[5px] w-[225px]"
              placeholder="Your name"
            />
            <input
              type="text"
              name="q"
              className="pl-[18px] py-[7px] border border-[#DCDDDF] bg-[#FFFFFF] rounded-[5px] w-[225px]"
              placeholder="Your email"
            />
          </div>
          <div>
            <input
              type="text"
              name="q"
              placeholder="subject"
              className="w-[478px] py-[5.5px] pl-5 border border-[#DCDDDF] bg-[#FFFFFF] rounded-[5px] mb-5"
            />
          </div>
          <div>
            <textarea
              type="text"
              name="q"
              placeholder="write a message"
              className="w-[478px] h-[134px] pl-5 pt-[14px] border border-[#DCDDDF] bg-[#FFFFFF] rounded-[5px] mb-[29px] resize-none"
            />
          </div>
          <div className="bg-[#4B6BFB] rounded-md inline-block py-[10px] px-4">
            <p className="font-medium text-sm text-[#FFFFFF] cursor-pointer">Send message</p>
          </div>
        </div>
      </div>
    );
}
export default ContactUs;