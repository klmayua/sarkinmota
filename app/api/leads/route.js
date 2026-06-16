import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, vehicle_slug, name, email, phone, message, finance_interest, swap_interest } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, phone." },
        { status: 400 }
      );
    }

    console.log("----------------------------------------");
    console.log(`NEW LEAD INGESTED [Type: ${type}]`);
    console.log(`Customer: ${name} (${email} | ${phone})`);
    console.log(`Vehicle Slug: ${vehicle_slug}`);
    console.log(`Finance Option: ${finance_interest} | Swap: ${swap_interest}`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------------");

    // Success response
    return NextResponse.json({
      success: true,
      ticket_id: `SM-LEAD-${Date.now()}`,
      message: "Lead recorded successfully."
    });
  } catch (err) {
    console.error("Error ingesting lead:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
