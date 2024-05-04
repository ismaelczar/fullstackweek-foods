import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { calculateTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={""} className="w-[150px] min-w-[150px]">
      <div className="w-full space-y-2">
        <div className="relative aspect-square w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
          <span className="absolute left-2 top-2 z-50 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-xs font-semibold text-white">
            <ArrowDown size={12} />
            {product.discountPercentage}%
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="truncate pt-2 text-sm font-medium">
          {product.name}
        </span>
        <div className="flex items-center gap-2">
          <strong>{formatCurrency(calculateTotalPrice(product))}</strong>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-[#7E8392] line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="truncate text-xs text-[#7E8392]">
          {product.restaurant.name}
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
