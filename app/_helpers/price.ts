import { Product } from "@prisma/client";


export const calculateTotalPrice = (product: Product): number => {
  // O preço cheio do produto será retornado se não houver porcentagem de desconto.
  if (product.discountPercentage === 0) {
    return Number(product.price)
  }

  const discount = Number(product.price) * (product.discountPercentage / 100)

  return Number(product.price) - discount
}

export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};