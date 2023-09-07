"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IFoodInfo, ILocationInfo } from "./interfaces/types";
import fajitasbg from "../mexican-dishes-pepper.jpg";

export default function Home() {
  const [homeLocationInput, setHomeLocationInput] = useState("");
  const autoTypeTexts = [
    "Rome",
    "New York",
    "Tokyo",
    "Buenos Aires",
    "Istanbul",
  ].map((city) => city + " ".repeat(15));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  function typeNextChar() {
    if (currentCharIndex <= autoTypeTexts[currentTextIndex].length) {
      setCurrentCharIndex((prevValue) => prevValue + 1);
    } else {
      setCurrentCharIndex(0);
      setCurrentTextIndex((currentTextIndex + 1) % autoTypeTexts.length);
    }
  }
  useEffect(() => {
    const interval = setInterval(typeNextChar, 150);
    return () => clearInterval(interval);
  }, [currentCharIndex]);

  return (
    <main className="flex flex-col items-center justify-evenly min-h-screen  ">
      {/*1st section, tagline, and form to go over to the AI page*/}
      <div className="flex flex-col h-[600px] w-screen relative bg-fajitasbg bg-cover">
        <h3 className="pl-10 mt-20 w-[765px] relative text-black text-[80px] font-bold">
          Eat like a local Anywhere you go!
        </h3>
        <div className="pl-10 mt-5 w-[350px] relative">
          <form>
            <input
              type="text"
              name="location"
              placeholder={autoTypeTexts[currentTextIndex].slice(
                0,
                currentCharIndex
              )}
              value={homeLocationInput}
              onChange={(e) => setHomeLocationInput(e.target.value)}
              required
              className="rounded-lg bg-white border-2 border-black p-3 w-full"
            />
            <Link
              href={{
                pathname: "/search",
                query: { homeLocation: homeLocationInput },
              }}
            >
              <button className="rounded-lg text-white bg-black p-1.5 w-full mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black">
                Find Foods
              </button>
            </Link>
          </form>
        </div>
      </div>
      {/*2nd section: the about section, 2 images of screens of AI program */}
      <div className="flex flex-row h-[600px] w-screen relative bg-gray-200">
        <div className="flex flex-col relative justify-center mb-16">
          <h3 className=" pl-10 w-[300px] relative text-black text-[50px] font-bold">
            About Us
          </h3>
          <p className="pl-10 mt-2 w-[500px]">
            Feastly is the essential app for travelers seeking authentic
            culinary experiences in foreign cities. Explore a world of flavors,
            discover hidden gems, and savor unforgettable meals tailored to your
            taste. With Feastly, you'll navigate global cuisine like a seasoned
            local, turning every trip into a delicious adventure.
          </p>
        </div>
        <div className="flex flex-col relative mt-28">

        </div>
      </div>
      {/*3rd Section: the Features section */}
      <div className="flex flex-row h-[600px] w-screen relative bg-gray-400"></div>
    </main>
  );
}
