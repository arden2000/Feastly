"use client";
import FoodListComponent from "./FoodListComponent";
import RestaurantListComponent from "./RestaurantListComponent";
import { useEffect, useState } from "react";
import { IFoodInfo, ILocationInfo } from "../interfaces/types";

export default function FoodToRestaurantComponent({
  foodList,
  locationInfo,
}: {
  foodList: Array<IFoodInfo>;
  locationInfo: ILocationInfo;
}) {
  const [selectedFood, setSelectedFood] = useState("");

  useEffect(() => {
    setSelectedFood("");
  }, [locationInfo]);

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-20">
        <FoodListComponent
          foodList={foodList}
          setSelectedFood={setSelectedFood}
        />
        {selectedFood != "" ? (
          <RestaurantListComponent
            selectedFood={selectedFood}
            locationInfo={locationInfo}
          />
        ) : null}
      </div>
    </div>
  );
}
