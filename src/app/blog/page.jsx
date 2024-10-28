import { BlogPosts } from "@/components/Posts";
import Link from "next/link";

const BlogPage = async ({ searchParams }) => {
    const { q } = searchParams;

    let data = null;

    if (q) {
      const response = await fetch(
        "https://next-mock-api.vercel.app/api/posts?size=12&q=" + q
      );
      data = await response.json();
    } else {
      const response = await fetch(
        "https://next-mock-api.vercel.app/api/posts?size=12&page=1"
      );
      data = await response.json();
    }

  return (
    <section className="container">
      <div className="font-bold text-2xl text-[#181A2A] mb-12">
        <h1>{q ? `"${q}" - search results` : "All blog posts"}</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogPosts post={item} />
          </Link>
        ))}
      </div>
      <nav
        aria-label="Page navigation example"
        className="flex justify-center my-10"
      >
        <ul class="inline-flex -space-x-px text-sm">
          {Array.from({ length: data.pageInfo.totalPages }).map((_, index) => (
            <li key={index}>
              <a
                href="#"
                class={`flex items-center justify-center px-3 h-8 leading-tight ${
                  index + 1 === data.pageInfo.page
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 bg-white"
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default BlogPage;
