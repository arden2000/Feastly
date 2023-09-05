"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { IRestaurantInfo } from "@/app/interfaces/types";

export default function RestaurantBoxComponent({
  restaurantInfo,
  restaurantMap,
  setRestaurantProps,
  selectedFood,
}: {
  restaurantInfo: IRestaurantInfo;
  restaurantMap: Map<string, Map<string, IRestaurantInfo>>;
  setRestaurantProps: any;
  selectedFood: string;
}) {
  const [image, setImage] = useState("/black_image.jpg");
  const [restaurantUrl, setRestaurantUrl] = useState("");

  const getRestaurantPhoto = async () => {
    const response = await fetch("/api/restaurantPhoto", {
      method: "POST",
      body: JSON.stringify({
        reference:
          restaurantInfo.photos != undefined
            ? (restaurantInfo.photos[0] as any).photo_reference
            : "",
      }),
    });
    const data = await response.json();

    setImage(data.result);
    setRestaurantProps(null, data.result);

    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
  };

  const getRestaurantDetails = async () => {
    const response = await fetch("/api/restaurantDetails", {
      method: "POST",
      body: JSON.stringify({
        placeId: restaurantInfo.place_id,
      }),
    });
    const data = await response.json();

    setRestaurantUrl(data.result.result.url);
    setRestaurantProps(data.result.result.url, null);

    // const restaurants = restaurantMap.get(selectedFood);
    // const r = restaurants != undefined ? restaurants.get(restaurantInfo.name != undefined ? restaurantInfo.name : "") : undefined;
    // if (r != undefined) {r.url = data.result.result.url}
    // if (restaurants != undefined) {restaurants.set()}
    // setRestaurantMap(
    //   restaurantMap.set(selectedFood, r.set(url, data.result.result.url)
    // );

    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
  };
  useEffect(() => {
    if (restaurantInfo.image == undefined) {
      getRestaurantPhoto().catch(console.error);
    } else {
      setImage(restaurantInfo.image)
    }
    if (restaurantInfo.url == undefined) {
      getRestaurantDetails().catch(console.error);
    } else {
      setRestaurantUrl(restaurantInfo.url)
    }
  }, []);

  // useEffect(() => {
  //   setImage(restaurantInfo.photos != undefined ? restaurantInfo.photos[0].getUrl() : "/black_image.jpg");
  // }, []);

  return (
    <div className="flex flex-row gap-4 justify-start">
      <img src={image} alt="me" width="128" height="128" />
      <div className="flex flex-col">
        <a
          href={restaurantUrl}
          target="_blank"
          className="text-lg font-medium hover:underline"
        >
          {restaurantInfo.name}
        </a>
        <p>{restaurantInfo.vicinity}</p>
        <p className="flex flex-row items-center">
          <AiFillStar color="orange" />
          {restaurantInfo.rating} ({restaurantInfo.user_ratings_total})
        </p>
      </div>
    </div>
  );
}
