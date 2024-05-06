import RestaurantInfo from "@/app/_components/restaurant-info";
import { db } from "@/app/_lib/prisma";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!restaurant) {
    // TODO: Redicerionar para home page ???
    return undefined;
  }

  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
