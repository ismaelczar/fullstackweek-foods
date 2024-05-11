import { Button } from "@/app/_components/ui/button";
import { Category } from "@prisma/client";

interface RestaurantCategoriesProps {
  category: Category;
}

const RestaurantCategories = ({ category }: RestaurantCategoriesProps) => {
  return (
    <Button
      variant="secondary"
      className="max-h-[26px] min-w-[167px] bg-gray-100 px-[6px] py-1 font-normal text-gray-400"
    >
      {category.name}
    </Button>
  );
};

export default RestaurantCategories;
