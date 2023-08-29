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
        <main className="flex min-h-screen shrink-0 grow-0 flex-col items-center p-20 	">
            <div className="shrink-0">
                <SearchComponent
                    setFoodList={setFoodList}
                    setLocationInfo={setLocationInfo}
                // locationFromHome={(locationFromHome as string)}
                />
            </div>
            <div className="flex flex-col grow-0 h-full items-center w-full shrink-0 mt-20">
                {locationInfo != undefined ? (
                    <FoodToRestaurantComponent
                        foodList={foodList}
                        locationInfo={locationInfo}
                    />
                ) : null}
            </div>
        </main>
    );
}
