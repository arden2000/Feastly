import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("PLACE PHOTO REQUEST");

  const requestData = await req.json();
  const reference = requestData.reference;

  const baseUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.GOOGLE_MAPS_API_KEY}`;
  const photoReference = `&photo_reference=${reference}`;
  const maxWidth = `&maxwidth=400`;
  try {
    const response = await fetch(`${baseUrl}${photoReference}${maxWidth}`);

    return NextResponse.json(
      {
        result: response.url,
      },
      { status: response.status }
    );
  } catch (error) {
    console.log("Place Photo Error");
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: { message: "Place Photo Error" },
    });
  }
}
