"use client";
import Image from "next/image";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import FoodToRestaurantComponent from "./components/FoodToRestaurantComponent";
import { IFoodList } from "./interfaces/foodTypes";

export default function Home() {
  const [location, setLocation] = useState("");
  const [foodList, setFoodList] = useState<IFoodList>({local_foods: []});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>The new way to find local foods</p>
        <p>
          AI powered tool to help you find local foods and restuarents to find
          them
        </p>
      </div>
      <div>
        <SearchComponent setFoodList={setFoodList} setLocation={setLocation} />
        <FoodToRestaurantComponent foodList={foodList} />
        <p>{JSON.stringify(foodList)}</p>
      </div>
    </main>
  );
}
