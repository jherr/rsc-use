"use client";
import { use } from "react";
import { useFoodPromise } from "./FoodProvider";

export default function FoodList() {
  const foodPromise = useFoodPromise();
  console.log(foodPromise);
  const foods = use(foodPromise);
  return <div>Foods: {foods.join(", ")}</div>;
}
