import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Import your sanity client

interface SubscriptionRequest {
  email: string;
}

interface SubscriptionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function POST(req: Request): Promise<Response> {
  const { email }: SubscriptionRequest = await req.json();

  try {
    // Save to Sanity
    await client.create({
      _type: 'newsletter',
      email,
    });

    const response: SubscriptionResponse = {
      success: true,
      message: 'Subscribed! You’ll receive a confirmation.',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Sanity error:', error);

    const errorResponse: SubscriptionResponse = {
      success: false,
      error: 'Failed to save subscription',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
