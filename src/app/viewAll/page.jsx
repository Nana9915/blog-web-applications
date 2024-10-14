import { BlogPosts } from "@/components/Posts";

const ViewAllPost = () => {
  return (
    <div className="container">
      <div className="font-bold text-2xl text-[#181A2A] mb-12">
        <p>All Blog Post</p>
      </div>
      <div className="grid grid-rows-4 grid-cols-3 gap-5 mb-8">
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
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

export default ViewAllPost;
