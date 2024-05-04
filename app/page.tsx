import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

import PromoBaner01 from "@/public/promo-banner-01.png";
import PromoBaner02 from "@/public/promo-banner-02.png";

import { Button } from "./_components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="pt-6">
        <CategoryList />
      </div>

      <div className="pt-6">
        <PromoBanner src={PromoBaner01} alt={""} />
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

      <div className="space-y-4 py-6">
        {/* TODO:Ao clicar no produto, direcionar para o componente /product/[id].tsx */}
        <ProductList />
      </div>

      <div className="px-5">
        <PromoBanner src={PromoBaner02} alt={""} />
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

      {/* TODO:Ao clicar no restaurante, direcionar para o componente /restaurante/[id].tsx */}

      <div className="mb-6">
        <RestaurantList />
      </div>
    </>
  );
}
