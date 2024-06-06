import { Categorie } from "@/app/home/HomeCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categorie;
  images: string[];
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" min-w-32 p-2 max-w-32">
      <div className="shadow-lg border rounded">
        <Image
          src={product.category.image}
          alt={product.title}
          className="p-2"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col px-2 py-1">
        <div className="text-base font-bold">{product.title.slice(0, 10)}</div>
        <div className="ellipsis-multiline text-xs text-gray-500 leading-none">
          {product.description}
        </div>
        <div className="text-base font-bold">{product.price}¥</div>
      </div>
    </div>
  );
}
