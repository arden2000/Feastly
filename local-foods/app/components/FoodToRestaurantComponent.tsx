"use client";
import FoodListComponent from "./FoodListComponent";
import RestaurantListComponent from "./RestaurantListComponent";
import { useState } from "react";
import { IFoodList } from "../interfaces/foodTypes";


export default function FoodToRestaurantComponent({
  foodList,
  location,
}: {
  foodList: IFoodList;
  location: string;
}) {
  const [selectedFood, setSelectedFood] = useState("");
  const searchedLocation = location + "";
  return (
    <div>
      <div className="flex flex-row justify-evenly">
        <FoodListComponent
          foodList={foodList}
          setSelectedFood={setSelectedFood}
        />
        {selectedFood != "" ? (
          <RestaurantListComponent
            selectedFood={selectedFood}
            location={searchedLocation}
          />
        ) : null}
      </div>
    </div>
  );
}
