import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex h-[54px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-white shadow-sm">
      <Image
        src={category.imageUrl}
        alt={category.name}
        width={30}
        height={30}
      />
      <span className="font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
