import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

import PromoBanner from "@/public/PromoBanner.png";
import { Button } from "./_components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="py-6">
        <CategoryList />
      </div>

      <div>
        <Image
          src={PromoBanner}
          alt="Banner que destaca percentual de desconto nas pizzas"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          quality={100}
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
    </>
  );
}
