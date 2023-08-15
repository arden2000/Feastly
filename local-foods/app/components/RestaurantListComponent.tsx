"use client";
import RestaurantBoxComponent from "./RestaurantBoxComponent";
import { IFoodInfo } from "../interfaces/foodTypes";
import { IFoodList } from "../interfaces/foodTypes";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

export default function RestaurantListComponent({
  selectedFood,
  location,
}: {
  selectedFood: string;
  location: string;
}) {
  const [restaurants, setRestaurants] = useState<
    google.maps.places.PlaceResult[]
  >([]);
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [map, setMap] = useState<google.maps.Map>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.GOOGLE_MAPS_API_KEY ||
      "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (map != undefined) {
      console.log("in map load");
      console.log(map);

      let request = {
        keyword: `${selectedFood}`,
        // fields: ["name", "formatted_address"],
        location: new google.maps.LatLng(41.9028, 12.4964),
        radius: 25000,
      };

      let service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log("query success");
          console.log(results);
          setRestaurants(results != null ? results : []);
        }
      });
    }
  }, [selectedFood, map]);

  return (
    <div className="flex flex-col justify-center gap-y-6 w-1/3">
      {/* {foodList.local_foods.map((food: IFoodInfo) => (
        <FoodBoxComponent foodInfo={food} />
      ))} */}
      restaurants
      {isLoaded ? (
        <GoogleMap zoom={10} center={center} onLoad={(map) => setMap(map)}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        "Not loaded map"
      )}
      {restaurants.map((restaurant: google.maps.places.PlaceResult) => (
        <RestaurantBoxComponent restaurantInfo={restaurant} />
      ))}
    </div>
  );
}
