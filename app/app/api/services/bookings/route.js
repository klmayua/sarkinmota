import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      providerId,
      providerName,
      packageName,
      price,
      date,
      time,
      vehicle,
      clientName,
      clientEmail,
      clientPhone
    } = body;

    // Validation checks
    if (!providerId || !packageName || !price || !date || !time || !vehicle || !clientName || !clientEmail || !clientPhone) {
      return NextResponse.json(
        { success: false, error: "Missing required booking details." },
        { status: 400 }
      );
    }

    const bookingId = `SM-BKG-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    console.log("----------------------------------------");
    console.log(`NEW APPOINTMENT BOOKED [Ref: ${bookingId}]`);
    console.log(`Provider: ${providerName} (${providerId})`);
    console.log(`Service: ${packageName} | Price: ₦${price}`);
    console.log(`Schedule: ${date} @ ${time}`);
    console.log(`Vehicle: ${vehicle}`);
    console.log(`Customer: ${clientName} (${clientEmail} | ${clientPhone})`);
    console.log("----------------------------------------");

    return NextResponse.json({
      success: true,
      booking: {
        id: bookingId,
        providerId,
        providerName,
        packageName,
        price,
        date,
        time,
        vehicle,
        clientName,
        clientEmail,
        clientPhone,
        createdAt: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error("Error processing service booking:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
