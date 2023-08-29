"use client";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from 'next/navigation';
import SearchComponent from "./components/SearchComponent";
import FoodToRestaurantComponent from "./components/FoodToRestaurantComponent";
import { IFoodInfo, ILocationInfo } from "../interfaces/types";

export default function SearchPage() {
    const [locationInfo, setLocationInfo] = useState<ILocationInfo>();
    const [foodList, setFoodList] = useState<Array<IFoodInfo>>([]);


    return (
        <main className="flex min-h-screen flex-col items-center justify-evenly p-20 	">

            <SearchComponent
                setFoodList={setFoodList}
                setLocationInfo={setLocationInfo}
                // locationFromHome={(locationFromHome as string)}
            />

            <div className="flex flex-col items-center justify-evenly">
                {locationInfo != undefined ? (
                    <FoodToRestaurantComponent
                        foodList={foodList}
                        locationInfo={locationInfo}
                    />
                ) : null}

                {/* <p>{JSON.stringify(foodList)}</p> */}
            </div>
        </main>
    );
}
