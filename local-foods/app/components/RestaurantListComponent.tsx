"use client";
import RestaurantBoxComponent from "./RestaurantBoxComponent";
import { ILocationInfo } from "../interfaces/types";
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
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [map, setMap] = useState<google.maps.Map>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.GOOGLE_MAPS_API_KEY ||
      "",
    libraries,
  });

  useEffect(() => {
    if (map != undefined) {
      console.log("in map load");
      console.log(map);

      let request = {
        keyword: `${selectedFood}`,
        // fields: ["name", "formatted_address"],
        location: new google.maps.LatLng(
          locationInfo.coordinates.lat,
          locationInfo.coordinates.lng
        ),
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
    <div className="flex flex-col justify-start gap-y-6 w-1/3">
      {restaurants
        // .filter((restaurant: google.maps.places.PlaceResult) => {
        //   console.log(restaurant.rating)
        //   restaurant.rating != undefined && restaurant.rating > 4;
        // })
        .map((restaurant: google.maps.places.PlaceResult) => (
          <RestaurantBoxComponent key={restaurant.place_id} restaurantInfo={restaurant} />
        ))}
      {isLoaded ? (
        <GoogleMap zoom={10} center={center} onLoad={(map) => setMap(map)} />
      ) : (
        "Not loaded map"
      )}
    </div>
  );
}
