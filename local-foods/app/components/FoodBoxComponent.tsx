"use client";
import { useState } from "react";
import { IFoodInfo } from "../interfaces/foodTypes";
import Image from "next/image";

export default function FoodBoxComponent({
  foodInfo,
}: {
  foodInfo: IFoodInfo;
}) {
  return (
    <div className="flex flex-row">
      <Image src="/black_image.jpg" alt="me" width="64" height="64" />
      <div className="flex flex-col">
        <p>{foodInfo.name}</p>
        <p>{foodInfo.description}</p>
      </div>
    </div>
  );
}
