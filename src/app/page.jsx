import { AllPost } from "@/components/allBlogPost";
import { Slider } from "@/components/slider";
import { Trending } from "@/components/trending";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div>
        <Slider />
        <Trending />
        <AllPost/>
      </div>
    </main>
  );
}
