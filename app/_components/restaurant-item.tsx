import { Restaurant } from "@prisma/client";
import { HeartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import BagdeItem from "./badge";

interface RestauranteItemProps {
  restaurant: Restaurant;
}

const RestauranteItem = ({ restaurant }: RestauranteItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px]">
      <div className="w-full space-y-2">
        <div className="relative aspect-square h-[136px] w-full object-cover ">
          <Link href={`/restaurants/${restaurant.id}`}>
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="ob rounded-md object-cover"
            />
          </Link>
          <div className="absolute left-2 top-2 z-50">
            <BagdeItem type={1} />
          </div>

          <Button
            size="icon"
            className="absolute right-2 top-2 rounded-full bg-slate-500"
          >
            <HeartIcon size={16} className=" fill-white text-white" />
          </Button>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{restaurant.name}</h2>
          <div className="item-center flex gap-4">
            <div className="flex items-center gap-1">
              <Image src="/bikeIco.svg" alt="" width={12} height={12} />

              <span className="text-xs text-gray-400">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega Grátis"
                  : formatCurrency(Number(restaurant.deliveryFee))}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Image src="/timeIco.svg" alt="" width={12} height={12} />
              <span className="text-xs text-gray-400">
                {restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestauranteItem;
