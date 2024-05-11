import { Prisma } from "@prisma/client";
import Image from "next/image";
import { formatCurrency } from "../../../_helpers/price";
import { Card } from "../../../_components/ui/card";

interface DeliveryInfoProps {
  deliveryInfo: Prisma.RestaurantGetPayload<{
    select: {
      deliveryFee: true;
      deliveryTimeMinutes: true;
    };
  }>;
}

const DeliveryInfo = ({ deliveryInfo }: DeliveryInfoProps) => {
  return (
    <Card className="flex h-[58px] w-[350px] items-center justify-between border-gray-200 px-[50px] py-[10px]">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-500">Entrega</p>
          <Image src="/bikeIcoGray.svg" alt="" width={12} height={12} />
        </div>

        <span className="text-xs font-semibold">
          {Number(deliveryInfo.deliveryFee) === 0
            ? "Grátis"
            : formatCurrency(Number(deliveryInfo.deliveryFee))}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-500">Entrega</p>
          <Image src="/timeIcoGray.svg" alt="" width={12} height={12} />
        </div>

        <span className="text-xs font-semibold">
          {deliveryInfo.deliveryTimeMinutes} min
        </span>
      </div>
    </Card>
  );
};

export default DeliveryInfo;
