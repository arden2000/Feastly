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
    if (selectedFood == "") {
      setRestaurants([])
    }
  }, [selectedFood]);


  const RestaurantSkeleton = () => (
    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )

  return (
    <div className="flex flex-col grow-0 justify-start gap-y-6 w-1/3">
      <div className="text-center w-full">
        <p className="font-sans text-2xl font-bold">Where to Eat</p>
      </div>
      {(restaurants.length == 0 && selectedFood != "") ? ([...Array(8)].map((e, i) => <RestaurantSkeleton />)
      ) : null}
      {restaurants
        .map((restaurant: google.maps.places.PlaceResult) => ((restaurant.rating != undefined && restaurant.rating > 4
          && restaurant.user_ratings_total != undefined && restaurant.user_ratings_total > 50)
          ? (<RestaurantBoxComponent key={restaurant.place_id} restaurantInfo={restaurant} />) : null))}

    </div>
  );
}
