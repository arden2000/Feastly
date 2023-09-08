"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IFoodInfo, ILocationInfo } from "./interfaces/types";
import foodbg from "../chinesefood.jpg";

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
    <main className="flex flex-col items-center justify-evenly min-h-screen">
      {/*1st section, tagline, and form to go over to the AI page*/}
      <div className="flex flex-row h-[600px] w-screen relative justify-between">
        {/*This div is for the eat like a local and find foods button */}
        <div className="flex flex-col pl-32 mt-5 w-[350px] relative">
          <h3 className="mt-20 mb-8 w-[765px] relative text-ff3131 text-[80px] font-bold">
            Eat like a local Anywhere you go!
          </h3>
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
              className="rounded-lg bg-white border-2 border-black p-3 pl-16 w-full"
            />
            <Link
              href={{
                pathname: "/search",
                query: { homeLocation: homeLocationInput },
              }}
            >
              <button className="rounded-lg text-white bg-ff3131 p-1.5 w-full mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black">
                Find Foods
              </button>
            </Link>
          </form>
        </div>

        <div className="mr-20 h-[600px] w-[600px] relative bg-foodbg bg-cover"></div>
      </div>
      {/*2nd section: the about section, 2 images of screens of AI program */}
      <div className="h-[600px] w-screen relative bg-efe5da">
        <h3 className=" pl-10 w-screen text-center relative text-ff3131 text-[50px] font-bold">
          HOW DOES IT WORK?
        </h3>
        <div className="flex flex-row relative justify-between mb-16">
          <div className="flex flex-col relative pl-1 items-center">
            <p className="pl-10 mt-12 w-[765px] text-center text-2xl">
              Uncover the magic behind our AI-driven culinary companion in three
              simple steps.
            </p>
            <p className="pl-10 mt-6 w-[765px] text-center text-2xl">
              First, share your location to allow our AI to pinpoint the
              culinary treasures nearby.
            </p>
            <p className="pl-10 mt-6 w-[765px] text-center text-2xl">
              Next, reveal your food cravings and dietary needs, giving our AI
              the green light to whip up a personalized menu that’ll satisfy
              your every need.
            </p>
            <p className="pl-10 mt-6 w-[765px] text-center text-2xl">
              Finally, brace yourself for the mouthwatering journey ahead. No
              more stressing about where and what to eat. Our AI knows the best
              food for any event.
            </p>
            <button className="rounded-lg mt-3 text-white bg-ff3131 p-1.5 w-40 mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black">
              LETS GO
            </button>
            {/* <div className="flex flex-row justify-center mt-5">
            </div> */}
          </div>
        </div>
      </div>
      {/*3rd Section: the Features section */}
      <div className="flex flex-row h-[600px] w-screen relative bg-gray-400"></div>
    </main>
  );
}
