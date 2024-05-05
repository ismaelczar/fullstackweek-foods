import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface BadgeProps {
  type: 1 | 2;
}

const BagdeItem = ({ type }: BadgeProps) => {
  return (
    <Badge
      className={`flex items-center gap-[2px] ${type === 1 ? `bg-white text-black` : `bg-black text-white`} `}
    >
      <StarIcon
        size={12}
        height="bold"
        className=" fill-[#FFB100] text-[#FFB100]"
      />
      5.0
    </Badge>
  );
};

export default BagdeItem;
