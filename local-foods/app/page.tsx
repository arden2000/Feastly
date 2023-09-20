"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import AutoTypeSearchLinkComponent from "./components/AutoTypeSearchLinkComponent"

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-evenly min-h-screen gap-y-36 w-screen">
      {/*1st section, tagline, and form to go over to the AI page*/}
      <div className="flex flex-row w-screen relative justify-evenly w-full mt-20 ">
        {/*This div is for the eat like a local and find foods button */}
        <div className="flex flex-col max-w-1/2 gap-y-6 justify-center">
          <h3 className="text-bright-orange text-6xl font-bold">
            Eat like a local<br/> anywhere you go!
          </h3>
          <AutoTypeSearchLinkComponent />
        </div>
        <img src="/restaurant-vector.jpeg" className="h-[450px] max-w-1/2" />
      </div>
      {/*2nd section: the about section, 2 images of screens of AI program */}
      <div className="h-[600px] w-screen relative bg-white">
        <h3 className=" pl-10 w-screen text-center relative text-bright-orange text-4xl font-bold">
          Your Ultimate Travel Food Companion
        </h3>
        <div className="flex flex-row justify-evenly mb-16 w-full content-center">
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-2xl font-semibold">
              Never miss out on local flavor again
            </p>
            <p className="mt-6 text-xl w-2/3">
              Give us any location in the world and we will tell you all the best local and traditional foods you must try
            </p>
            <button className="rounded-lg text-white bg-bright-orange p-1.5 w-40 mt-2 hover:bg-white hover:text-black border-white border-2 hover:border-black">
              LETS GO
            </button>
            {/* <div className="flex flex-row justify-center mt-5">
            </div> */}
          </div>

          <img src="/restaurant-vector.jpeg" className="h-96" />

        </div>
      </div>
      {/*3rd Section: the Features section */}
      <h3 className="w-screen text-center relative text-bright-orange text-[50px] font-bold">
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
              <span className="text-bright-orange font-semibold text-sm mt-2 italic">
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
    </main>
  );
}
