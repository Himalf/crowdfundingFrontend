import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Donation1 from "@/assets/donate3.png";
import Donation2 from "@/assets/donate4.png";
import Donation3 from "@/assets/donate5.png";
import Donation4 from "@/assets/donate6.png";
import Donation5 from "@/assets/donate7.png";

const HeroSection = () => {
  const heroImage = [
    {
      name: Donation1,
    },
    {
      name: Donation2,
    },
    {
      name: Donation3,
    },
    {
      name: Donation4,
    },
    {
      name: Donation5,
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[70%] items-center mx-auto"
    >
      <CarouselContent>
        {heroImage.map((val, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-9">
                  <img
                    src={val.name}
                    alt="hero images"
                    className="h-full w-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default HeroSection;
