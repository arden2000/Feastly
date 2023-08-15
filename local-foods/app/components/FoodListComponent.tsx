"use client";
import FoodBoxComponent from "./FoodBoxComponent";
import { IFoodInfo } from "../interfaces/types";
import { Dispatch, SetStateAction } from "react";

export default function FoodListComponent({
  foodList,
  setSelectedFood,
}: {
  foodList: Array<IFoodInfo>;
  setSelectedFood: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col justify-center gap-y-6 w-1/3">
      {foodList.map((food: IFoodInfo) => (
        <FoodBoxComponent foodInfo={food} setSelectedFood={setSelectedFood} />
      ))}
    </div>
  );
}
