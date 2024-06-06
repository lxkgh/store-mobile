import Image from "next/image";
import { Categorie } from "./HomeCarousel";
import ProductCard, { Product } from "@/components/ProductCard";

export default function HotProducts({ products }: { products: Product[] }) {
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex flex-row flex-nowrap gap-2 px-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
