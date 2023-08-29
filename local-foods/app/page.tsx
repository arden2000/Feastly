"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useMemo } from "react";
import { IFoodInfo, ILocationInfo } from "./interfaces/types";

export default function Home() {
  const [locationInfo, setLocationInfo] = useState<ILocationInfo>();
  const [foodList, setFoodList] = useState<Array<IFoodInfo>>([]);
  const [homeLocationInput, setHomeLocationInput] = useState("");


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

      <form>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          value={homeLocationInput}
          onChange={(e) => setHomeLocationInput(e.target.value)}
          required
          className="rounded-lg bg-white border-2 border-black p-3 w-full"
        />
        <Link href={{
          pathname: '/search',
          query: { homeLocation: homeLocationInput },
        }}>
          <button
            className="rounded-lg text-white bg-black p-1.5 w-full mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black"
          >
            Find Foods
          </button>
        </Link>
      </form>
    </main>
  );
}
