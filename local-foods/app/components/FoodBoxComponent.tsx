"use client";
import { useState } from "react";
import { IFoodInfo } from "../interfaces/foodTypes";

export default function FoodBoxComponent({
  foodInfo,
}: {
  foodInfo: IFoodInfo;
}) {
  return <main>
    {foodInfo.name} : {foodInfo.description}
  </main>;
}
