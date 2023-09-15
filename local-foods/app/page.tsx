"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IFoodInfo, ILocationInfo } from "./interfaces/types";

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
          <h3 className="mt-20 mb-8 w-[765px] relative text-ff3131 text-[70px] font-bold">
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

        <div className="mt-16 mr-20 h-[450px] w-[450px] relative bg-foodbg bg-cover"></div>
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
          <div>
            <div className="mt-16 mr-20 h-[200px] w-[450px] relative bg-siteimg1 bg-cover"></div>
          </div>
        </div>
      </div>
      {/*3rd Section: the Features section */}
      <h3 className="w-screen text-center relative text-ff3131 text-[50px] font-bold">
          EXPLORE OUR FEATURES
        </h3>
      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white"></h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Discover Culinary Treasures Effortlessly
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {" "}
                Our AI-powered app helps you find and savor famous local dishes
                and desserts while on the go. From street vendors to quaint
                eateries, we've got your cravings covered.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg"></h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <span className="text-white font-semibold text-sm mt-2 italic">
                Coming Soon!
              </span>
              <h3 className="mb-3 font-bold text-white text-xl">
                Personalized Reccommendations!
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                {" "}
                Tailor your food exploration by setting dietary preferences,
                flavor profiles, and dining preferences, whether you prefer fine
                dining or local street vendors. Our AI learns and refines its
                recommendations with each use, ensuring faster, tailored
                selections that cater to your evolving tastes. Enjoy a
                continuously customized culinary journey.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white"></h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <span className="text-ff3131 font-semibold text-sm mt-2 italic">
                Coming Soon!
              </span>
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Discover like-minded foodies!
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Expand your culinary horizons by incorporating fellow foodies'
                experiences and recommendations into your flavor profile. Share
                and cherish your memorable dining adventures, and connect with
                like-minded travelers to embark on delightful culinary journeys
                together while exploring new destinations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-11/12 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-row justify-between space-x-40">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Feastly
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
