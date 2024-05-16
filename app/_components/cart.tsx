import { Product } from "@prisma/client";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

interface CartProps {
  product: Product;
}

const Cart = () => {
  return (
    <SheetContent className="w-[90vw]">
      <SheetHeader>
        <SheetTitle className="text-start text-lg font-semibold">
          Sacola
        </SheetTitle>
      </SheetHeader>
      <div></div>
    </SheetContent>
  );
};

export default Cart;
