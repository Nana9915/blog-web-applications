const NotFound = () => {
    return (
      <div className="container flex justify-center items-center  mb-[100px]">
        <div className="w-[642px] h-[208px] flex justify-center items-center">
          <div className="mr-[58.8px]">
            <p className="font-normal text-7xl text-[#000000]">404</p>
          </div>
          <div className="border-l border-[#E8E8EA]">
            <div className="ml-[58.5px]">
              <div className="mb-5 ">
                <p className="text-[#000000] font-semibold text-2xl">
                  Page Not Found
                </p>
              </div>
              <div className="mb-5">
                <p className="text-[#696A75] font-normal text-lg">
                  We're sorry, This page is unknown or does not exist the page
                  you are looking for.
                </p>
              </div>
              <div className="bg-[#4B6BFB] inline-block py-[10px] px-4 rounded-[6px] cursor-pointer">
                <p className="text-[#FFFFFF] font-medium text-sm">
                  Back to home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default NotFound;