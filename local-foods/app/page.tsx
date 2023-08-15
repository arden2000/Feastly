"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import SearchComponent from "./components/SearchComponent";
import FoodToRestaurantComponent from "./components/FoodToRestaurantComponent";
import { IFoodList } from "./interfaces/foodTypes";
import { Loader } from "@googlemaps/js-api-loader";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const [location, setLocation] = useState("");
  const [foodList, setFoodList] = useState<IFoodList>({ local_foods: [] });
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const libraries = ["places"];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
  });
  const onMapLoad = (map: google.maps.Map) => {
    console.log("in map load");
    console.log(map)

    let request = {
      keyword: "suppli ",
      // fields: ["name", "formatted_address"],
      location: new google.maps.LatLng(41.9028, 12.4964),
      radius: 25000

    };

    let service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("query success");
        console.log(results);
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-20 	">
      <div className="flex flex-col items-center gap-y-7 text-center">
        <p className="font-sans leading-normal text-6xl font-bold text-transparent bg-clip-text animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
          The new way to find local foods
        </p>
        <p className="font-sans text-xl">
          AI powered tool to help you find local foods and restauants to eat
          them
        </p>
      </div>
      <SearchComponent setFoodList={setFoodList} setLocation={setLocation} />

      <div className="flex flex-col items-center justify-evenly">
        <FoodToRestaurantComponent foodList={foodList} />
        {/* <p>{JSON.stringify(foodList)}</p> */}
        {isLoaded ? (
          <GoogleMap
            zoom={10}
            center={center}
            onLoad={(map) => onMapLoad(map)}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          "Npt loaded map"
        )}
      </div>
    </main>
  );
}
