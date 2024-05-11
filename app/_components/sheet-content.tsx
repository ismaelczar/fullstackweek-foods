import {
  CupSoda,
  Fish,
  Grape,
  Heart,
  Home,
  IceCreamCone,
  LogOut,
  Pizza,
  Sandwich,
  ScrollText,
  Utensils,
} from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";

const Menu = () => {
  return (
    <SheetContent className="px-5 py-3">
      <SheetHeader className="items-start ">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 pt-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>

        {/* TODO: Adicionar dados da conta logada. */}

        <div className="flex flex-col">
          <h2 className="text-base font-semibold">Ismael Cézar</h2>
          <p className="text-xs text-gray-400">ismaelcezar@gmail.com</p>
        </div>
      </div>

      <div className="py-5">
        <Separator className="bg-slate-300" />
      </div>

      <div className="flex flex-col gap-[2px]">
        <Button
          asChild
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Link href="/">
            <Home size={14} />
            Ínicio
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <ScrollText size={14} />
          Meus Pedidos
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Heart size={14} />
          Restaurantes Favoritos
        </Button>
      </div>

      <div className="py-5">
        <Separator className="bg-slate-300" />
      </div>

      <div className="flex flex-col gap-1">
        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Utensils size={14} />
          Pratos
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Sandwich size={14} />
          Lanches
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Pizza size={14} />
          Pizza
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Fish size={14} />
          Japonesa
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <IceCreamCone size={14} />
          Sobremesas
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <Grape size={14} />
          Sucos
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 rounded-3xl text-sm"
        >
          <CupSoda size={14} />
          Refrigerantes
        </Button>
      </div>

      <div className="py-5">
        <Separator className="bg-slate-300" />
      </div>

      <div className="pt-">
        <Button variant="ghost" className="flex items-center gap-2">
          <LogOut size={16} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default Menu;
