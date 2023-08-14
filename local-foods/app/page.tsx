"use client";
import Image from "next/image";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import FoodToRestaurantComponent from "./components/FoodToRestaurantComponent";
import { IFoodList } from "./interfaces/foodTypes";

export default function Home() {
  const [location, setLocation] = useState("");
  const [foodList, setFoodList] = useState<IFoodList>({ local_foods: [] });

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-20 	">
      <div className="flex flex-col items-center gap-y-7 text-center">
        <p className="font-sans leading-normal text-6xl font-bold text-transparent bg-clip-text animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
          The new way to find local foods
        </p>
        <p className="font-sans text-xl">
          AI powered tool to help you find local foods and restauants to eat
          them
        </p>
      </div>
      <SearchComponent setFoodList={setFoodList} setLocation={setLocation} />

      <div className="flex flex-col items-center justify-evenly">
        <FoodToRestaurantComponent foodList={foodList} />
        {/* <p>{JSON.stringify(foodList)}</p> */}
      </div>
    </main>
  );
}
