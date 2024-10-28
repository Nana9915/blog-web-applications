import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";

import "./content.css";

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const post = await fetch(
    `https://next-mock-api.vercel.app/api/posts/${id}`
  ).then((res) => res.json());

  return {
    title: post.title,
    openGraph: {
      image: "https://images3.alphacoders.com/132/1328547.png",
    },
  };
}

const ArticleRead = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts/" + id
  );
  console.log({ response });
  if (response.status === 404) return notFound();
  const post = await response.json();

  return (
    <section className="container mb-20">
      <h1 className="color-[#181A2A] font-semibold text-4xl mb-5">
        {post.title}
      </h1>
      <div className="flex items-center gap-5 mb-8">
        <div className="flex items-center gap-3">
          <Image
            alt={post.authorName}
            src={post.authorImage}
            width={36}
            height={36}
            className="object-cover rounded-full aspect-square"
          />
          <p className="text-[#97989F] font-medium text-[14px]">
            {post.authorName}
          </p>
        </div>
        <p className="text-[#97989F] font-normal text-[14px]">
          {dayjs(post.createdAt).format("MMMM DD, YYYY")}
        </p>
      </div>
      <Image src={post.image} width={1920} height={1080} alt="" className="rounded-xl mb-8" />

      <div
        className="content mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
};

export default ArticleRead;
