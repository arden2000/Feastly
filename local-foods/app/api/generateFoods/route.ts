import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const requestData = await req.json();
  const location = requestData.location || "";

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
          When a user gives you a location recommend 5 local foods from 
          the location with a 1 sentence description. Include the coordinates 
          of the user's location. Return as a JSON in the 
          following format:
          {
          coordinates: {
            lat: number,
            lng: number
          },
          local_foods: [{name: name, description: description}]
          } `,
        },
        {
          role: "user",
          content: `${location}`,
        },
      ],
    });

    console.log(completion.data);
    console.log(completion.data.choices[0].message);

    if (completion.status != 200) {
      return NextResponse.json({
        status: completion.status,
        message: completion.statusText,
      });
    } else {
      return NextResponse.json(
        {
          result:
            completion.data.choices[0].message !== undefined
              ? completion.data.choices[0].message.content
              : null,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("GPT RESPONSE ERROR");
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: { message: "GPT Request Error" },
    });
  }
}
