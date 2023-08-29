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
  const [restaurantUrl, setRestaurantUrl] = useState()

  const getRestaurantPhoto = async () => {
    const response = await fetch("/api/restaurantPhoto", {
      method: "POST",
      body: JSON.stringify({
        reference: restaurantInfo.photos!=undefined ? restaurantInfo.photos[0].photo_reference : ""
      }),
    });
    const data = await response.json();

    setImage(data.result)

    if (response.status !== 200) {
      throw (
        data.error ||
        new Error(`Request failed with status ${response.status}`)
      );
    }
  }
  // console.log("photo refernce")
  // console.log(restaurantInfo.photos[0].photo_reference)

  const getRestaurantDetails = async () => {

    const response = await fetch("/api/restaurantDetails", {
      method: "POST",
      body: JSON.stringify({
        placeId: restaurantInfo.place_id,
        photoReference: restaurantInfo.photos!=undefined ? restaurantInfo.photos[0].photo_reference : ""
      }),
    });
    const data = await response.json();

    console.log("restaurant details")
    console.log(data)

    setRestaurantUrl(data.result.result.url);

    if (response.status !== 200) {
      throw (
        data.error ||
        new Error(`Request failed with status ${response.status}`)
      );
    }
  }
  useEffect(() => {
    getRestaurantDetails().catch(console.error);
    getRestaurantPhoto().catch(console.error)
  }, [])

  // useEffect(() => {
  //   setImage(restaurantInfo.photos != undefined ? restaurantInfo.photos[0].getUrl() : "/black_image.jpg");
  // }, []);

  return (
    <div className="flex flex-row gap-4 justify-start">
      <img src={image} alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <a href={restaurantUrl} target="_blank" className="text-lg font-medium hover:underline">{restaurantInfo.name}</a>
        <p>{restaurantInfo.vicinity}</p>
        <p className="flex flex-row items-center">
          <AiFillStar color="orange" />
          {restaurantInfo.rating} ({restaurantInfo.user_ratings_total})
        </p>
      </div>
    </div>
  );
}
