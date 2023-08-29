"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"

export default function RestaurantBoxComponent({
  restaurantInfo,
}: {
  restaurantInfo: google.maps.places.PlaceResult;
}) {
  const [image, setImage] = useState("/black_image.jpg");

  useEffect(() => {
    setImage(restaurantInfo.photos != undefined ? restaurantInfo.photos[0].getUrl() : "/black_image.jpg");
  }, []);

  return (
    <div className="flex flex-row gap-4 justify-start">
      <img src={image} alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{restaurantInfo.name}</p>
        <p>{restaurantInfo.vicinity}</p>
        <p className="flex flex-row items-center">
          <AiFillStar color="orange" />
          {restaurantInfo.rating} ({restaurantInfo.user_ratings_total}) 
        </p>
      </div>
    </div>
  );
}
