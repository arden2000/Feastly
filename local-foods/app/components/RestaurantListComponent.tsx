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
      "AIzaSyD3CyG687amROKI80LXyz1x4-8VBM5ytlk",
    libraries,
  });

  const compare = (a :  google.maps.places.PlaceResult, b :  google.maps.places.PlaceResult) => {
    if (a.rating == undefined || b.rating == undefined){
      return 0;
    }
    if ( a.rating < b.rating ){
      return 1;
    }
    if ( a.rating > b.rating ){
      return -1;
    }
    return 0;
  }

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
          setRestaurants(results != null ? results.sort(compare) : []);
        }
      });
    }
  }, [selectedFood, map]);

  return (
    <div className="flex flex-col justify-start gap-y-6 w-1/3">
      {restaurants
        .map((restaurant: google.maps.places.PlaceResult) => ((restaurant.rating != undefined && restaurant.rating > 4
          && restaurant.user_ratings_total != undefined && restaurant.user_ratings_total > 50)
          ? (<RestaurantBoxComponent key={restaurant.place_id} restaurantInfo={restaurant} />) : null))}
      {isLoaded ? (
        <GoogleMap zoom={10} center={center} onLoad={(map) => setMap(map)} />
      ) : (
        "Not loaded map"
      )}
    </div>
  );
}
