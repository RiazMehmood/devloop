import { NextResponse } from "next/server";
import { Twilio } from "twilio";

export async function POST(req: Request) {
  const { email } = await req.json();

  const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
  );

  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.YOUR_WHATSAPP_TO!,
      body: `📬 New Newsletter Subscription:\n\n📧 Email: ${email}`,
    });

    return NextResponse.json({ success: true, message: "Subscribed! You’ll get a WhatsApp alert." });
  } catch (error) {
    console.error("WhatsApp error:", error);
    return NextResponse.json({ error: "Failed to send WhatsApp message" }, { status: 500 });
  }
}
