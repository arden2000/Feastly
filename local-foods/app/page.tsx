"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react";
import { IFoodInfo, ILocationInfo } from "./interfaces/types";

export default function Home() {
  const [homeLocationInput, setHomeLocationInput] = useState("");
  const autoTypeTexts = ["Rome", "New York", "Tokyo", "Buenos Aires", "Istanbul"].map(city => city + " ".repeat(15));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  function typeNextChar() {
    if (currentCharIndex <= autoTypeTexts[currentTextIndex].length) {
      setCurrentCharIndex(prevValue => prevValue + 1);
    
    } else {
      setCurrentCharIndex(0);
      setCurrentTextIndex((currentTextIndex + 1) % autoTypeTexts.length);
    }
  }
  useEffect(() => {
    const interval = setInterval(typeNextChar, 150);
    return () => clearInterval(interval)
  }, [currentCharIndex])

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
          placeholder={autoTypeTexts[currentTextIndex].slice(0, currentCharIndex)}
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
