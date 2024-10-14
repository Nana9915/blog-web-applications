import Link from "next/link";
import { BlogPosts } from "./Posts";

export const AllPost = () => {
  return (
    <div className="container">
      <div className="mb-8">
        <p className="font-bold text-2xl text-[#181A2A] mb-8">All Blog Post</p>
        <div className="flex justify-between">
          <div className="flex gap-5 font-bold text-xs text-[#495057]">
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              All
            </Link>
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              Design
            </Link>
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              Travel
            </Link>
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              Fashion
            </Link>
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              Technology
            </Link>
            <Link href={"#"} className="hover:text-[#D4A373] duration-500">
              Branding
            </Link>
          </div>
          <div>
            <Link
              href={"#"}
              className="text-[#495057] font-bold text-xs hover:text-[#D4A373] duration-500"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 gap-5 mb-8">
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
      </div>
      <div className="flex justify-center">
        <div className="text-[#696A75] font-medium text-base py-3 px-5 border border-[#696A75]/30 rounded-md mb-[80px] cursor-pointer">
          Load more
        </div>
      </div>
    </div>
  );
};
