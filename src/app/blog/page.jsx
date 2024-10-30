"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { BlogPosts } from "@/components/Posts";
import Link from "next/link";

const BlogPage = ({ searchParams }) => {
  const { q, page = 1 } = searchParams;
  const [data, setData] = useState({ items: [], pageInfo: {} });
  const [currentPage, setCurrentPage] = useState(Number(page));
  const router = useRouter(); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://next-mock-api.vercel.app/api/posts?size=12&page=${currentPage}${
          q ? `&q=${q}` : ""
        }`
      );

      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [currentPage, q]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/blog?page=${newPage}${q ? `&q=${q}` : ""}`);
  };

  return (
    <section className="container">
      <div className="font-bold text-2xl text-[#181A2A] mb-12">
        <h1>{q ? `"${q}" - search results` : "All blog posts"}</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.length > 0 ? (
          data.items.map((item) => (
            <Link key={item.id} className="block" href={`/blog/${item.id}`}>
              <BlogPosts post={item} />
            </Link>
          ))
        ) : (
          <div>No posts found.</div>
        )}
      </div>
      <nav
        aria-label="Page navigation example"
        className="flex justify-center my-10"
      >
        <ul className="inline-flex -space-x-px text-sm">
          {Array.from({ length: data.pageInfo.totalPages }).map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  index + 1 === currentPage
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 bg-white"
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default BlogPage;
