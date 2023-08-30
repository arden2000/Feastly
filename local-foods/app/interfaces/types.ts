enum FoodType {
	Dessert = "dessert",
	Meal = "meal",
	Breakfast = "breakfast",
}

interface IFoodInfo {
  name: string;
  description: string;
  category: FoodType
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

export type { IFoodInfo, ILocationInfo, IGptResponse };
export {FoodType};
