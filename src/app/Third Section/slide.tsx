 "use client";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
 
import Image from "next/image";
 
import { useEffect, useState } from "react";
 

export function ImageSider() {
  const [api] = useState<CarouselApi>();
  const [,setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      plugins={[AutoPlay({ delay: 2000 })]}
      className="lg:w-[404px] lg:h-[582px] lg:visible xl:visible md:visible invisible lg-left-[0px] left-[65px] "
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex justify-between items-center">
            <div className="lg:w-[500px] w-[300px] h-[545px] flex ">
              
              <Image
                className="lg:w-[404px] lg:h-[584px] w-full h-screen"
                src="/images/carousel1.png"
                alt=""
                width={392}
                height={350}
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex justify-between items-center">
            <div className="bg-black lg:w-[900px] w-[400px] h-[345px] flex ">
              
              <Image
                 className="lg:w-[404px] lg:h-[584px] w-full h-screen"
                src="/images/carousel2.png"
                alt=""
                width={592}
                height={650}
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex justify-between items-center">
            <div className="bg-black lg:w-[900px] w-[400px] h-[345px] flex ">
               
              <Image
                 className="lg:w-[404px] lg:h-[584px] w-full h-screen"
                src="/images/carousel3.png"
                alt=""
                width={592}
                height={650}
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}


  
 

 
