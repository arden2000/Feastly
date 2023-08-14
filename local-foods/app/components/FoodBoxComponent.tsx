"use client";
import { useState } from "react";
import { IFoodInfo } from "../interfaces/foodTypes";
import Image from "next/image";
import { createApi } from 'unsplash-js';

export default function FoodBoxComponent({
  foodInfo,
}: {
  foodInfo: IFoodInfo;
}) {
  const [foodPhoto, setFoodPhoto] = useState("");

  const unsplash = createApi({
    accessKey: "FoKHpz_pV5MxqEnszra3hxKMwoUGHUhP088Ttntpf0w",
    //...other fetch options
  });
  const getPhoto = () => {
    unsplash.search.getPhotos({
      query: 'cat',
      page: 1,
      perPage: 1
    }).then(result => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        alert("HERE")
        setFoodPhoto(foodInfo.name)
        console.log("JERE", result);
      }
    });
  }
  if (foodPhoto === ""){
    getPhoto()
  }


  return (
    <div className="flex flex-row">
      <Image src="/black_image.jpg" alt="me" width="64" height="64" />
      <div className="flex flex-col">
        <p>{foodInfo.name}</p>
        <p>{foodInfo.description}</p>
        {foodPhoto}
      </div>
    </div>
  );
}
