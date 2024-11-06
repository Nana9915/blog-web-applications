import Link from "next/link";
import { BlogPosts } from "./Posts";

export const AllPost = async () => {
  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts?size=9"
  );
  const data = await response.json();

  const categoriesResponse = await fetch(
    "https://next-mock-api.vercel.app/api/posts/categories"
  );
  const categoriesData = await categoriesResponse.json();


  return (
    <section className="container">
      <div className="mb-8">
        <h2 className="font-bold text-2xl text-[#181A2A] mb-8">
          All Blog Posts
        </h2>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link
              href={"/blog"}
              className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
            >
              All
            </Link>
            {categoriesData.map((category, index) => (
              <Link
                key={index}
                href={"/category/" + category}
                className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
              >
                {category}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href={"/blog"}
              className="text-[#495057] font-bold text-xs hover:text-[#D4A373] duration-500"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogPosts post={item} />
          </Link>
        ))}
      </div>
      
    </section>
  );
}; 
