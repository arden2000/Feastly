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
    <div>
      <FoodListComponent foodList={foodList} />
    </div>
  );
}
