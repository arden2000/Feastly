"use client";
import FoodListComponent from "./FoodListComponent";
import RestaurantListComponent from "./RestaurantListComponent";
import { useEffect, useState } from "react";
import { IFoodInfo, ILocationInfo } from "../../interfaces/types";

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
      <div className="flex flex-row grow-0 w-full mt-20 gap-x-32 justify-center">
        <FoodListComponent
          foodList={foodList}
          setSelectedFood={setSelectedFood}
          selectedFood={selectedFood}
        />
        <RestaurantListComponent
          selectedFood={selectedFood}
          locationInfo={locationInfo}
        />
      </div>
  );
}
