import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];

  type: number;
}

const ProductList = ({ products, type }: ProductListProps) => {
  return (
    //px-5
    <div
      className={`${
        type != 1
          ? "grid grid-cols-2 gap-6  "
          : "flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
      } `}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
