import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductDetails from "./_components/product-details";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id: params.id,
    },

    include: {
      restaurant: {
        select: {
          imageUrl: true,
          name: true,
          deliveryFee: true,
          deliveryTimeMinutes: true,
          id: true,
        },
      },
    },
  });

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product?.restaurant.id,
      },
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductDetails product={product} juices={juices} />
    </>
  );
};

export default ProductPage;
