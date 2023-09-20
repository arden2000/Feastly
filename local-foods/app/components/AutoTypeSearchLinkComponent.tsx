"use client";
import Link from "next/link"
import { useState, useEffect } from "react";

export default function AutoTypeSearchLinkComponent() {
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
      <form className="flex flex-col">
        <input
          type="text"
          name="location"
          placeholder={autoTypeTexts[currentTextIndex].slice(0, currentCharIndex)}
          value={homeLocationInput}
          onChange={(e) => setHomeLocationInput(e.target.value)}
          className="rounded-lg bg-white border-2 border-black p-3 w-2/3"
        />
        <Link href={{
          pathname: '/search',
          query: { homeLocation: homeLocationInput },
        }}>
          <button
            className="rounded-lg text-lg font-semibold text-white bg-bright-orange py-3 px-1.5 w-1/3 mt-2 hover:bg-white hover:text-bright-orange border-white border-2 hover:border-bright-orange"
          >
            FIND FOODS
          </button>
        </Link>
      </form>
  );
}
