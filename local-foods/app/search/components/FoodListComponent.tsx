"use client";
import FoodBoxComponent from "./FoodBoxComponent";
import { IFoodInfo, FoodType } from "../../interfaces/types";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

export default function FoodListComponent({
  foodList,
  setSelectedFood,
  selectedFood,
}: {
  foodList: Array<IFoodInfo>;
  setSelectedFood: Dispatch<SetStateAction<string>>;
  selectedFood: string;
}) {
  const [foodType, setFoodType] = useState("");

  const setFilter = (filterName: FoodType) => {
    if (filterName == foodType) {
      setFoodType("");
    }
    else {
      setFoodType(filterName);
    }
  }

  useEffect(() => { setFoodType("") }, [foodList]);

  const filterButtonStyles = (filterName : FoodType) => 
  {return `rounded-lg ${(foodType == filterName) ? "text-white bg-black" : "text-black bg-white border-black"} p-1.5 px-8 mt-2 hover:bg-black hover:text-white  border-2 hover:border-black`}
  
  return (
    <div className="flex flex-col grow-0 justify-start gap-y-6 w-1/3">
      <div className="text-center w-full">
        <p className="font-sans text-2xl font-bold">Foods</p>
      </div>
      {foodList.length != 0 ?
        (
          <div className="flex flex-row justify-evenly items-center">
            <button className={filterButtonStyles(FoodType.Breakfast)} onClick={() => setFilter(FoodType.Breakfast)}>Breakfast</button>
            <button className={filterButtonStyles(FoodType.Meal)} onClick={() => setFilter(FoodType.Meal)}>Lunch & Dinner</button>
            <button className={filterButtonStyles(FoodType.Dessert)} onClick={() => setFilter(FoodType.Dessert)}>Dessert</button>
          </div>
        ) : null}
      {foodList.map((food: IFoodInfo) => (
        (foodType == "" || food.category.toLowerCase() == foodType) ?
          (<FoodBoxComponent key={food.name} foodInfo={food} setSelectedFood={setSelectedFood} selectedFood={selectedFood} />) : null
      ))}
    </div>
  );
}
