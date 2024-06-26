"use client";

import { Prisma } from "@prisma/client";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { calculateTotalPrice, formatCurrency } from "@/app/_helpers/price";
import { Badge } from "@/app/_components/ui/badge";
import DeliveryInfo from "@/app/restaurants/[id]/_components/delivery-info";
import ProductList from "@/app/_components/product-list";
import { useContext, useState } from "react";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import Cart from "@/app/_components/cart";
import { CartContext } from "@/app/_context/cart";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          imageUrl: true;
          name: true;
          deliveryFee: true;
          deliveryTimeMinutes: true;
        };
      };
    };
  }>;

  juices: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };

    take: 10;
  }>[];
}

const ProductDetails = ({ product, juices }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { products, addProductToCart } = useContext(CartContext);

  const deliveryInfo = {
    deliveryFee: product.restaurant.deliveryFee,
    deliveryTimeMinutes: product.restaurant.deliveryTimeMinutes,
  };

  function handleIncrementAmount() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementAmout() {
    setQuantity((state) => {
      if (state === 1) {
        return 1;
      }

      return state - 1;
    });
  }

  const route = useRouter();

  function handleBack() {
    route.replace("/");
  }

  function handleAddToCartClick() {
    addProductToCart(product, quantity);
  }

  return (
    <div>
      <div className="relative z-0 h-[332px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
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
        </div>
      </div>

      <div className="absolute mt-[-10px] w-full rounded-t-lg bg-white p-5">
        <div className=" flex items-center gap-[6px]">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            width={0}
            height={0}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-xs text-gray-400">
            {product.restaurant.name}
          </span>
        </div>

        <h1 className="pt-1 text-xl font-semibold">{product.name}</h1>

        <div className="flex items-center justify-between">
          <div className="flex flex-col pt-3">
            <div className="flex items-center gap-[5px]">
              <h2 className="text-xl font-semibold">
                {formatCurrency(calculateTotalPrice(product))}
              </h2>
              <Badge className="flex w-[48px] items-center px-2 py-[2px] text-white">
                <ArrowDown size={12} />
                {product.discountPercentage}%
              </Badge>
            </div>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-[#7E8392]">
                De: {formatCurrency(Number(product.price))}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="h-[32] w-[32] p-2"
              variant="secondary"
              onClick={handleDecrementAmout}
            >
              <ChevronLeft size={16} />
            </Button>

            <span>{quantity}</span>

            <Button
              className="h-[32] w-[32] p-2"
              variant="secondary"
              onClick={handleIncrementAmount}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        <div className="flex justify-center py-5">
          <DeliveryInfo deliveryInfo={deliveryInfo} />
        </div>

        <h2 className="text-base font-semibold">Sobre</h2>
        <p className="text-sm text-[#7E8392]">{product.description}</p>

        <div className="py-5">
          <h2 className="text-base font-semibold">Sucos</h2>
          <ProductList products={juices} type={1} />
        </div>

        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="w-full text-sm font-semibold"
                onClick={handleAddToCartClick}
              >
                Adicionar à Saloca
              </Button>
            </SheetTrigger>

            <Cart />
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
