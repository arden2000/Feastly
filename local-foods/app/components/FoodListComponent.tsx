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
    <div className="flex flex-col justify-center gap-4">
      {foodList.local_foods.map((food: IFoodInfo) => (
        <FoodBoxComponent foodInfo={food} />
      ))}
    </div>
  );
}
