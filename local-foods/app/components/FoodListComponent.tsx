"use client";
import FoodBoxComponent from "./FoodBoxComponent";
import { IFoodInfo } from "../interfaces/foodTypes";
import { IFoodList } from "../interfaces/foodTypes";

export default function FoodListComponent({
  foodList,
}: {
  foodList: IFoodList;
}) {
  return (
    <main>
      {foodList.local_foods.map((food: IFoodInfo) => (
        <FoodBoxComponent foodInfo={food} />
      ))}
    </main>
  );
}
