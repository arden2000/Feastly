"use client";
import FoodBoxComponent from "./FoodBoxComponent";
import { IFoodInfo } from "../interfaces/foodTypes";
import { IFoodList } from "../interfaces/foodTypes";
import { Dispatch, SetStateAction } from "react";

export default function FoodListComponent({
  foodList,
  setSelectedFood,
}: {
  foodList: IFoodList;
  setSelectedFood: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col justify-center gap-y-6 w-1/3">
      {foodList.local_foods.map((food: IFoodInfo) => (
        <FoodBoxComponent foodInfo={food} setSelectedFood={setSelectedFood} />
      ))}
    </div>
  );
}
