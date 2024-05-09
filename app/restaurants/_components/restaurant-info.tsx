"use client";

import { Prisma } from "@prisma/client";
import Image from "next/image";
import { Button } from "../../_components/ui/button";
import { ChevronLeft, HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import BagdeItem from "../../_components/badge";
import DeliveryInfo from "./delivery-info";
import RestaurantCategories from "./restaurant-categories";
import ProductItem from "../../_components/product-item";
import ProductList from "@/app/_components/product-list";

interface RestaurantInfoProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      categories: {
        include: {
          products: {
            include: {
              restaurant: {
                select: {
                  name: true;
                };
              };
            };
          };
        };
      };

      products: {
        include: {
          restaurant: {
            select: {
              name: true;
            };
          };
        };
      };
    };
  }>;
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
            variant="secondary"
            size="icon"
            className="absolute left-2 top-2 rounded-full bg-white"
            onClick={handleBack}
          >
            <ChevronLeft size={16} className="text-black" />
          </Button>

          <Button
            variant="secondary"
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

        <div className="pt-3">
          <DeliveryInfo deliveryInfo={restaurant} />
        </div>

        <div className="item-center flex w-full  gap-4 overflow-x-auto px-5 pt-3 [&::-webkit-scrollbar]:hidden">
          {restaurant.categories.map((category) => (
            <RestaurantCategories key={category.id} category={category} />
          ))}
        </div>

        <div>
          <h2 className="pt-5 font-semibold">Mais Pedidos</h2>

          <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
            {restaurant.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {restaurant.categories.map((category) => (
            <div className="mt-6 space-y-4" key={category.id}>
              <h2 className="px-5  font-semibold">{category.name}</h2>
              <ProductList products={category.products} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
