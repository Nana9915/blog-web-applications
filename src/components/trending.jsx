import { TrendCard } from "./trendcard";

export const Trending = () => {
  return (
    <div className="container mb-[112px]">
      <div className="font-bold text-[#181A2A] text-[24px] leading-[28px]">
        <p>Trending</p>
      </div>
      <div className="flex gap-6">
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </div>
  );
};

