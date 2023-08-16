"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { IGptResponse, IFoodInfo, ILocationInfo } from "../interfaces/types";

export default function SearchComponent({
  setFoodList,
  setLocationInfo,
}: {
  setFoodList: Dispatch<SetStateAction<Array<IFoodInfo>>>;
  setLocationInfo: Dispatch<SetStateAction<ILocationInfo | undefined>>;
}) {
  const [locationInput, setLocationInput] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generateFoods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: locationInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data.result);
      let gptResponse: IGptResponse = JSON.parse(data.result);
      setFoodList(gptResponse.local_foods);
      setLocationInfo({
        name: locationInput,
        coordinates: gptResponse.coordinates,
      });
      setLocationInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          required
          className="rounded-lg bg-white border-2 border-black p-3 w-full"
        />
        <button
          type="submit"
          className="rounded-lg text-white bg-black p-1.5 w-full mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black"
        >
          Find Foods
        </button>
      </form>
    </div>
  );
}
