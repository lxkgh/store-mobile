import { Input } from "@/components/ui/input";
import HomeCarousel from "./HomeCarousel";
import HotProducts from "./HotProducts";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

const home_urls = [
  "https://api.escuelajs.co/api/v1/categories/1",
  "https://api.escuelajs.co/api/v1/categories/2",
  "https://api.escuelajs.co/api/v1/categories/3",
];
export default async function Home() {
  const homeImages = await Promise.all(
    home_urls.map((v) => fetch(v).then((r) => r.json()))
  );
  const hotProducts = await fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((res) => res.filter((v: any) => Boolean(v.id)).slice(0, 10));
  return (
    <div className="flex flex-col">
      {/* <SearchBar /> */}
      <div className="flex flex-row w-full flex-nowrap p-2 gap-2">
        <Input placeholder="输入搜索内容"></Input>
        <Button>
          <Icons.Search className="w-4 h-4 mr-2" />
          搜索
        </Button>
      </div>
      <HomeCarousel images={homeImages} />
      <div className="flex flex-col">
        <div className=" font-bold text-2xl px-2">热门推荐</div>
        <HotProducts products={hotProducts} />
      </div>
    </div>
  );
}
