import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { value_usd, manufacture_year, is_electric, port_of_entry } = body;

    if (!value_usd || !manufacture_year || !port_of_entry) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: value_usd, manufacture_year, port_of_entry." },
        { status: 400 }
      );
    }

    const cbnRate = 1550; // NGN per USD

    // 1. Age & Depreciation
    const currentYear = new Date().getFullYear();
    const age = currentYear - manufacture_year;
    let depRate = 0.50; // max 50%
    if (age === 0) depRate = 0.00;
    else if (age === 1) depRate = 0.10;
    else if (age === 2) depRate = 0.20;
    else if (age === 3) depRate = 0.30;
    else if (age === 4) depRate = 0.40;

    const depreciatedValueUsd = value_usd * (1 - depRate);

    // 2. CIF calculation
    const shippingUsd = port_of_entry === "PORT_HARCOURT" ? 2200 : 1500;
    const cifUsd = depreciatedValueUsd + shippingUsd;
    const cifNgn = cifUsd * cbnRate;

    // 3. Taxes & Tariffs
    const surfaceDutyRate = is_electric ? 0.10 : 0.20; // 10% for EV, 20% standard
    const surfaceDuty = cifNgn * surfaceDutyRate;
    const surcharge = surfaceDuty * 0.07; // 7% Surcharge
    const etls = cifNgn * 0.005; // 0.5% ECOWAS
    const ciss = value_usd * cbnRate * 0.01; // 1% CISS on FOB
    const vat = (cifNgn + surfaceDuty + surcharge + etls + ciss) * 0.075; // 7.5% VAT

    const brokerFee = 350000; // Flat clearing fee
    const totalLandingCost = surfaceDuty + surcharge + etls + ciss + vat + brokerFee;

    return NextResponse.json({
      success: true,
      depreciated_value_usd: depreciatedValueUsd,
      cif_value_ngn: cifNgn,
      surface_duty_ngn: surfaceDuty,
      surcharge_ngn: surcharge,
      etls_ngn: etls,
      ciss_ngn: ciss,
      vat_ngn: vat,
      broker_fee_ngn: brokerFee,
      total_landing_cost: totalLandingCost
    });
  } catch (err) {
    console.error("Error calculating customs estimate:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
