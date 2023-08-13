'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [locationInput, setLocationInput] = useState("");
  const [result, setResult] = useState();

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
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      setLocationInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>The new way to find local foods</p>
        <p>AI powered tool to help you find local foods and restuarents to find them</p>
      </div>
      <div>
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
        <p>{result}</p>
      </div>
    </main>
  )
}
