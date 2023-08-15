"use client";
import { useState } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function RestaurantBoxComponent({
  restaurantInfo,
}: {
  restaurantInfo: google.maps.places.PlaceResult;
}) {
  return (
    <div className="flex flex-row gap-4 justify-start">
      <Image src="/black_image.jpg" alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{restaurantInfo.name}</p>
        <p>{restaurantInfo.vicinity}</p>
      </div>
    </div>
  );
}
