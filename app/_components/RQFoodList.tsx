"use client";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";

import { useFoodPromise } from "./FoodProvider";

export default function FoodList() {
  const foodPromise = useFoodPromise();
  const { data: foods, isFetching } = useQuery(["foods"], () => foodPromise, {
    initialData: use(foodPromise),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isFetching) return <div>RQ Loading...</div>;

  return <div>RQ Foods: {foods?.join(", ")}</div>;
}
