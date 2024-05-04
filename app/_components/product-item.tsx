import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { calculateTotalPrice, formatCurrency } from "../_helpers/price";

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
        </div>
      </div>

      <div className="flex flex-col">
        <span className="truncate">{product.name}</span>
        <div className="flex items-center gap-2">
          <strong>{formatCurrency(calculateTotalPrice(product))}</strong>
          {product.discountPercentage > 0 && (
            <span className="text-xs line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="truncate">{product.restaurant.name}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
