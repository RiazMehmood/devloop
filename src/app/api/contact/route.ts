import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // adjust if your sanity client path is different

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await client.create({
      _type: "contactMessage",
      name,
      email,
      message,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
