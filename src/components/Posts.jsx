import dayjs from "dayjs";
import Image from "next/image";

export const BlogPosts = (post) => {
  
    return (
      <article className="rounded-xl p-4 border border-[#E8E8EA] ">
        <Image
          src={post.image}
          className="object-cover rounded-md mb-4 aspect-[360/240] w-full"
          width={360}
          height={240}
          alt={post.title}
        />
        <div className="w-[360px] h-[200px] p-2">
          <div className="flex gap-4">
            {post.categories.map((category) => (
              <div
                key={category}
                className="rounded-md bg-[#4B6BFB0D] inline-block py-1 px-[10px] mb-4 text-[#4B6BFB] font-medium text-sm">
                {category}
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#181A2A] font-semibold text-2xl mb-5">
              {post.title}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  alt={post.authorName}
                  src={post.authorImage}
                  width={36}
                  height={36}
                  className="object-cover rounded-full aspect-square"
                />
              </div>
              <div>
                <p className="font-medium text-base text-[#97989F]">
                  {post.authorName}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#97989F] font-normal text-base">
                {dayjs(post.createdAt).format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
}