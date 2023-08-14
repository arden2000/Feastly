"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { IFoodList } from "../interfaces/foodTypes";


export default function SearchComponent({
  setFoodList, setLocation,
}: {
  setFoodList: Dispatch<SetStateAction<IFoodList>>;
  setLocation: Dispatch<SetStateAction<string>>
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
      let foodList : IFoodList = JSON.parse(data.result)
      setFoodList(foodList);
      setLocation(locationInput);
      setLocationInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <input type="submit" value="Generate names" />
      </form>
    </main>
  );
}