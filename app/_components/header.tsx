import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

import logo from "@/public/logo.png";
import { Sheet, SheetTrigger } from "./ui/sheet";
import Menu from "./sheet-content";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-5 pt-6">
        <div className="relative h-[30px] w-[100px]">
          <Image src={logo} alt="Logotipo FWS food" className="object-cover" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="border-none bg-transparent"
              variant={"outline"}
            >
              <MenuIcon className="h-5 w-5 text-black" />
            </Button>
          </SheetTrigger>

          <Menu />
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
