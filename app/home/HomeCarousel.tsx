"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface Categorie {
  id: number;
  name: string;
  image: string;
}
// https://fakeapi.platzi.com/en/rest/categories/
export default function HomeCarousel({ images }: { images: Categorie[] }) {
  const { width } = useWindowSize();
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }
    const timeout = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2000);
    return () => {
      clearInterval(timeout);
    };
  }, [api]);
  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((categorie, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center w-full"
            >
              <Image
                src={categorie.image}
                alt={categorie.name}
                style={{ height: "200px" }}
                width={width}
                height={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
