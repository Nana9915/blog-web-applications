"use client";

import Link from "next/link";
import { BlogPosts } from "./Posts";
import { useState, useEffect } from "react";

export const AllPost = () => {
  const [data, setData] = useState({ items: [] });
  const [limit, setLimit] = useState(9);
  const fetchData = async () => {
    const response = await fetch(
      `https://next-mock-api.vercel.app/api/posts?size=${limit}`
    );
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleClick = () => {
    setLimit(limit + 3);
  };

  return (
    <div className="container">
      <div className="mb-8">
        <p className="font-bold text-2xl text-[#181A2A] mb-8">All Blog Posts</p>
        <div className="flex justify-between">
          <div className="flex gap-5 font-bold text-xs text-[#495057]">
            {[
              "All",
              "Design",
              "Travel",
              "Fashion",
              "Technology",
              "Branding",
            ].map((category) => (
              <Link
                key={category}
                href={"#"}
                className="hover:text-[#D4A373] duration-500"
              >
                {category}
              </Link>
            ))}
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
      <div className="grid grid-rows-3 grid-cols-1 gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {data.items.slice(0, limit).map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogPosts post={item} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="text-[#696A75] font-medium text-base py-3 px-5 border border-[#696A75]/30 rounded-md mb-[80px] cursor-pointer hover:border-black">
          <button onClick={handleClick}>Load more</button>
        </div>
      </div>
    </div>
  );
};
