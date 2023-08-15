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
      <div className="flex flex-row justify-evenly">
        <FoodListComponent foodList={foodList} />
        <FoodListComponent foodList={foodList} />
      </div>
    </div>
  );
}
