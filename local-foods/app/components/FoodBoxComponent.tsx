"use client";
import { IFoodInfo } from "../interfaces/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

export default function FoodBoxComponent({
  foodInfo,
  setSelectedFood,
  selectedFood,
}: {
  foodInfo: IFoodInfo;
  setSelectedFood: Dispatch<SetStateAction<string>>;
  selectedFood: string;
}) {
  // const [style, setStyle] = useState("");

  // if (selectedFood === foodInfo.name) {
  //   setStyle("border-2 border-black scale-105");
  // } else {
  //   setStyle("border");
  // }

  return (
    <div
      onClick={() => setSelectedFood(foodInfo.name)}
      className={`flex flex-row gap-4 justify-start ${
        selectedFood === foodInfo.name
          ? "border-2 border-black scale-105"
          : "border"
      } rounded-lg p-4 hover:scale-105 hover:border-2`}
    >
      <Image src="/black_image.jpg" alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{foodInfo.name}</p>
        <p>{foodInfo.description}</p>
      </div>
    </div>
  );
}
