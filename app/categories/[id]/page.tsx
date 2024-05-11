import Header from "@/app/_components/header";
import ProductList from "@/app/_components/product-list";
import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage = async ({ params: { id } }: CategoryPageProps) => {
  const category = await db.category.findUnique({
    where: {
      id: id,
    },
    include: {
      products: {
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
        take: 10,
      },
    },
  });

  if (!category) {
    return notFound();
  }
  return (
    <>
      <Header />

      <div className="px-5">
        <h1 className="py-6 text-lg font-semibold">{category?.name}</h1>

        <div className="pt-5 ">
          <ProductList products={category?.products} type={2} />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
