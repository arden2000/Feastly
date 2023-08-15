"use client";
import { useState } from "react";
import { IFoodInfo } from "../interfaces/foodTypes";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function FoodBoxComponent({
  foodInfo,
  setSelectedFood,
}: {
  foodInfo: IFoodInfo;
  setSelectedFood: Dispatch<SetStateAction<string>>;
}) {


  return (
    <div onClick={() => setSelectedFood(foodInfo.name)} className="flex flex-row gap-4 justify-start">
      <Image src="/black_image.jpg" alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{foodInfo.name}</p>
        <p>{foodInfo.description}</p>
      </div>
    </div>
  );
}
