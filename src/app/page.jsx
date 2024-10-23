import { AllPost } from "@/components/allBlogPost";
import { Carousel } from "@/components/slider";
import { Trending } from "@/components/trending";

export default function Home() {
  return (
    <main>
          <Carousel />
          <Trending />
          <AllPost />
    </main>
  );
}
{/* <div limit={limit} data={data} className="flex justify-center">
            {limit < data.length && (
              <div className="text-[#696A75] font-medium text-base py-3 px-5 border border-[#696A75]/30 rounded-md mb-[80px]">
                <button variant="outline" onClick={() => setLimit(limit + 9)}>
                  Load more
                </button>
              </div>
            )}
          </div> */}