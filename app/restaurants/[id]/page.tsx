import RestaurantInfo from "@/app/restaurants/_components/restaurant-info";
import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";

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
    include: {
      categories: {
        // orderBy: {
        //   createdAt: "desc",
        // },
        include: {
          products: {
            //incluindo as categorias e os produtos do restaurante.
            where: {
              restaurantId: params.id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
