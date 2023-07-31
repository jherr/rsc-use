"use client";
import { createContext, useContext } from "react";

const FoodContext = createContext<Promise<string[]> | null>(null);

export const useFoodPromise = () => {
  const food = useContext(FoodContext);
  if (!food) throw new Error("useFood must be used within a FoodProvider");
  return food;
};

const FoodProvider = ({
  children,
  foodPromise,
}: {
  children: React.ReactNode;
  foodPromise: Promise<string[]>;
}) => {
  return (
    <FoodContext.Provider value={foodPromise}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
