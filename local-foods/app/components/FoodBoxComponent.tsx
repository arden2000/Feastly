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

  const [foodImage, setFoodImage] = useState("/black_image.jpg")

  const getFoodImage = async () => {
    console.log("getting food images")
    const response = await fetch("/api/imageSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodName: foodInfo.name }),
    });

    const data = await response.json();
    console.log(data.result.items[0])
    setFoodImage(data.result.items[0].link)

    if (response.status !== 200) {
      throw (
        data.error ||
        new Error(`Request failed with status ${response.status}`)
      );
    }
  }

  getFoodImage().catch(console.error)

  return (
    <div
      onClick={() => setSelectedFood(foodInfo.name)}
      className={`flex flex-row gap-4 justify-start ${selectedFood === foodInfo.name
          ? "border-2 border-black scale-105"
          : "border"
        } rounded-lg p-4 hover:scale-105 hover:border-2`}
    >
      <img src={foodImage} alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{foodInfo.name}</p>
        <p>{foodInfo.description}</p>
      </div>
    </div>
  );
}
