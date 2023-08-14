"use client";
import FoodListComponent from "./FoodListComponent";
import { useState } from "react";
import { IFoodList } from "../interfaces/foodTypes";

export default function FoodToRestaurantComponent({
  foodList,
}: {
  foodList: IFoodList;
}) {
  return (
    <main>
      <FoodListComponent foodList={foodList} />
    </main>
  );
}
