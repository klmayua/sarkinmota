import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { ticketType, name, email, quantity, amount } = body;

    // Validation
    if (!name || !email || !ticketType || !quantity) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: ticketType, name, email, quantity." },
        { status: 400 }
      );
    }

    const priceMap = {
      GENERAL: 5000,
      VIP: 25000,
    };

    const expectedAmount = (priceMap[ticketType] || 0) * quantity;
    const ticketId = `SM-TKT-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
    const qrCode = `SM-QR-${Math.random().toString(36).substring(2, 15).toUpperCase()}-${Math.random().toString(36).substring(2, 15).toUpperCase()}`;

    console.log("----------------------------------------");
    console.log(`NEW TICKET PURCHASED [ID: ${ticketId}]`);
    console.log(`Attendee: ${name} (${email})`);
    console.log(`Tier: ${ticketType} | Qty: ${quantity}`);
    console.log(`Amount Charged: ₦${amount} (Expected: ₦${expectedAmount})`);
    console.log(`QR Code Token: ${qrCode}`);
    console.log("----------------------------------------");

    // Success response returning ticket metadata
    return NextResponse.json({
      success: true,
      ticket: {
        id: ticketId,
        ticketType,
        name,
        email,
        quantity,
        amount: expectedAmount,
        qr_code: qrCode,
        createdAt: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error("Error processing ticket purchase:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
