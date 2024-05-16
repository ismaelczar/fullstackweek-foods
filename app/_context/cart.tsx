"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

//Estrutura do Produto -> Adicionando campo que não tem por padrão.
interface CartProduct extends Product {
  quantity: number;
  // -> O produto vem como objeto.
}

//Estrutura do contexto
interface iCartContext {
  products: CartProduct[]; // Array com vários Produtos
  addProductToCart(product: Product, quantity: number): void;
}

// Contexto e seu valor de estrutura inicial.
export const CartContext = createContext<iCartContext>({
  products: [],
  addProductToCart: () => {},
});

const CartProdiver = ({ children }: { children: ReactNode }) => {
  // Armazenando os produtos
  const [products, setProducts] = useState<CartProduct[]>([]);

  function addProductToCart(product: Product, quantity: number) {
    // VERIFICAR SE O PRODUTO É EXISTENTE NO CARRINHO
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (isProductAlreadyOnCart) {
      return setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          return cartProduct;
        }),
      );
    }

    //Premanece o que já tem, adicionando o novo produto e sua quantidade.
    setProducts((prevState) => [
      ...prevState,
      { ...product, quantity: quantity },
    ]);
  }

  return (
    <CartContext.Provider value={{ products, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProdiver;
