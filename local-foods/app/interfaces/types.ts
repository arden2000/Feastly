enum FoodType {
	Dessert = "dessert",
	Meal = "meal",
	Breakfast = "breakfast",
}

interface IFoodInfo {
  name: string;
  description: string;
  category: FoodType
  image: string;
}

interface IRestaurantInfo extends google.maps.places.PlaceResult{
  url: string;
  image: string;
}


interface IGptResponse {
  local_foods: Array<IFoodInfo>;
  coordinates: {
    lat: number;
    lng: number;
  }
}

interface ILocationInfo {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  }
}

export {FoodType};
export type { IFoodInfo, ILocationInfo, IGptResponse, IRestaurantInfo };
