// import type { GoogleImagesParameters } from "serpapi";
import { getJson } from "serpapi";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestData = await req.json();
  const foodName = requestData.foodName || "";

  const params = {
    api_key: process.env.SERP_API_KEY,
    google_domain: "google.com",
    q: `${foodName} meal`,
    hl: "en",
    gl: "us",
  };

  const response = await getJson("google_images", params);
  return NextResponse.json(
    {
      result: response,
    },
    { status: 200 }
  );
}
