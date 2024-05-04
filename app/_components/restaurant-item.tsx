import { Restaurant } from "@prisma/client";
import { HeartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

import bikeIco from "@/public/bikeIco.png";
import timeIco from "@/public/timeIco.png";
import { formatCurrency } from "../_helpers/price";

interface RestauranteItemProps {
  restaurant: Restaurant;
}

const RestauranteItem = ({ restaurant }: RestauranteItemProps) => {
  return (
    <div className="h-[190px] w-[266px] min-w-[266px]">
      <div className="w-full space-y-2">
        <div className="relative aspect-square h-[136px] w-full object-cover ">
          <Link href={""}>
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="rounded-md"
            />
          </Link>
          <Badge className="absolute left-2 top-4 z-50 flex items-center gap-[2px] bg-white text-black">
            <StarIcon
              size={12}
              height="bold"
              className=" fill-[#FFB100] text-[#FFB100]"
            />
            5.0
          </Badge>

          <HeartIcon className="absolute right-2 top-3 z-50 rounded-full bg-slate-500 fill-white p-1 text-base text-white" />
        </div>

        <div>
          <h2 className="text-sm font-semibold">{restaurant.name}</h2>
          <div className="item-center flex gap-4">
            <div className="flex items-center gap-1">
              <Image src={bikeIco} alt="" />

              {Number(Number(restaurant.deliveryFee)) === 0 ? (
                <span className="text-xs text-gray-400">Entrega Grátis</span>
              ) : (
                <span className="text-xs text-gray-400">
                  {formatCurrency(Number(restaurant.deliveryFee))}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              <Image src={timeIco} alt="" />
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
