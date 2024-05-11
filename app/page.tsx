import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

import { Button } from "./_components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";
import { db } from "./_lib/prisma";

const Home = async () => {
  const products = await db.product.findMany({
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <main>
        <div className="pt-6">
          <CategoryList />
        </div>

        <div className="pt-6">
          <PromoBanner
            src="/promo-banner-01.png"
            alt="Baner com promoções em pizzas"
          />
        </div>

        <div className="flex items-center justify-between px-5 pt-6">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            asChild
            className="border-node bg-transparent p-0"
            variant={"link"}
          >
            <Link href={""} className="flex items-center">
              Ver todos <ChevronRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="px-4 py-6">
          <ProductList products={products} type={1} />
        </div>

        <div className="px-5">
          <PromoBanner
            src="/promo-banner-02.png"
            alt="Banner com promoções em lanches"
          />
        </div>

        <div className="flex items-center justify-between px-5 pt-6">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button
            asChild
            className="border-node bg-transparent p-0"
            variant={"link"}
          >
            <Link href={""} className="flex items-center">
              Ver todos <ChevronRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="mb-6">
          <RestaurantList />
        </div>
      </main>
    </>
  );
};

export default Home;
