// interface IFoodList {
//   local_foods: Array<IFoodInfo>;
// }

interface IFoodInfo {
  name: string;
  description: string;
  image: string;
}

interface IRestaurantInfo {
  name: string;
  rating: number;
  user_ratings_total: number;
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

export type { IFoodInfo, ILocationInfo, IGptResponse, IRestaurantInfo };
