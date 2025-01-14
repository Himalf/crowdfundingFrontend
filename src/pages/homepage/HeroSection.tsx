import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Donation1 from "@/assets/donate6.png";
import Donation2 from "@/assets/donation8.png";
import Donation3 from "@/assets/donate6.png";
import Donation4 from "@/assets/donation9.png";
import Donation5 from "@/assets/donate6.png";

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
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[100%] items-center mx-auto"
    >
      <CarouselContent>
        {heroImage.map((val, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card className="rounded-lg">
                <CardContent className="max-h-[35rem] min-h-[35rem] mx-auto flex items-center justify-center p-9">
                  <img
                    src={val.name}
                    alt="hero images"
                    className="w-[70%] h-fit p-10 object-contain rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroSection;
