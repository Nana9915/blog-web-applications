import { AllPost } from "@/components/allBlogPost";
import { Carousel } from "@/components/slider";
import { Trending } from "@/components/trending";

export default function Home() {
  return (
    <main>
      <div>
        <Carousel />
        <Trending />
        <AllPost/>
      </div>
    </main>
  );
}
