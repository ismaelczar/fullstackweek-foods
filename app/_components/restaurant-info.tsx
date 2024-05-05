"use client";

import { Restaurant } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, HeartIcon, StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import BagdeItem from "./badge";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  const route = useRouter();

  function handleBack() {
    route.replace("/");
  }

  return (
    <div>
      <div className="relative z-0 h-[200px] w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="z-0 object-cover"
        />

        <div className="justfy-between flex items-center">
          <Button
            size="icon"
            className="absolute left-2 top-2 rounded-full bg-white"
            onClick={handleBack}
          >
            <ChevronLeft size={16} className="text-black" />
          </Button>

          <Button
            size="icon"
            className="absolute right-2 top-2 rounded-full bg-slate-500"
          >
            <HeartIcon size={16} className=" fill-white text-white" />
          </Button>
        </div>
      </div>

      <div className="absolute mt-[-10px] w-full rounded-t-lg bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-[30px] w-[30px]">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold">{restaurant.name}</h1>
          </div>

          <BagdeItem type={2} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
