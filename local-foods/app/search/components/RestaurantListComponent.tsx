"use client";
import RestaurantBoxComponent from "./RestaurantBoxComponent";
import { ILocationInfo } from "../../interfaces/types";
import { GoogleMap, useLoadScript, Libraries } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
const libraries: Libraries = ["places"];

export default function RestaurantListComponent({
  selectedFood,
  locationInfo,
}: {
  selectedFood: string;
  locationInfo: ILocationInfo;
}) {
  const [restaurants, setRestaurants] = useState<
    google.maps.places.PlaceResult[]
  >([]);

  const compareRestaurants = (a: google.maps.places.PlaceResult, b: google.maps.places.PlaceResult) => {
    if (a.rating == undefined || b.rating == undefined) {
      return 0;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  }

  const getRestaurants = async () => {
    const response = await fetch("/api/restaurantSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: selectedFood,
        lat: locationInfo.coordinates.lat,
        lng: locationInfo.coordinates.lng,
        radius: 25000
      }),
    });

    const data = await response.json();
    
    console.log("restaurants")
    console.log(data)

    setRestaurants(data != null ? data.result.results.sort(compareRestaurants) : []);

    if (response.status !== 200) {
      throw (
        data.error ||
        new Error(`Request failed with status ${response.status}`)
      );
    }
  }

  useEffect(() => {
    if (selectedFood != "") {
      getRestaurants().catch(console.error)
    }
  }, [selectedFood]);

  return (
    <div className="flex flex-col justify-start gap-y-6 w-1/3">
      {restaurants
        .map((restaurant: google.maps.places.PlaceResult) => ((restaurant.rating != undefined && restaurant.rating > 4
          && restaurant.user_ratings_total != undefined && restaurant.user_ratings_total > 50)
          ? (<RestaurantBoxComponent key={restaurant.place_id} restaurantInfo={restaurant} />) : null))}

    </div>
  );
}
