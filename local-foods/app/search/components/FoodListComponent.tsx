"use client";
import FoodBoxComponent from "./FoodBoxComponent";
import { IFoodInfo } from "../../interfaces/types";
import { Dispatch, SetStateAction } from "react";

export default function FoodListComponent({
  foodList,
  setSelectedFood,
  selectedFood,
}: {
  foodList: Array<IFoodInfo>;
  setSelectedFood: Dispatch<SetStateAction<string>>;
  selectedFood: string;
}) {
  return (
    <div className="flex flex-col justify-start gap-y-6 w-1/3">
      {foodList.map((food: IFoodInfo) => (
        <FoodBoxComponent key={food.name} foodInfo={food} setSelectedFood={setSelectedFood} selectedFood={selectedFood}/>
      ))}
    </div>
  );
}
