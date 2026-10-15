import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate inputs
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const applianceType = String(body.applianceType || "").trim();
    const problemDescription = String(body.problemDescription || "").trim();
    const locality = String(body.locality || "").trim();

    if (!name || !phone || !applianceType || !problemDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your Name, Phone Number, Appliance Type, and Problem Description.",
        },
        { status: 400 }
      );
    }

    // Basic phone validation (at least 10 digits)
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    const payload = {
      id: `ENQ-${Date.now().toString().slice(-6)}`,
      name,
      phone,
      applianceType,
      problemDescription,
      locality,
      status: "New",
      submittedAt: new Date().toISOString(),
    };

    // Log the enquiry on the server
    console.log("🛠️ New Doorstep Repair Enquiry Received:", payload);

    // Optional webhook or Google Sheet integration if configured in .env
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Webhook forwarding error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your repair enquiry has been registered successfully!",
        data: payload,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: "ok", endpoint: "/api/enquiry", service: "CoolCare Appliance Repair" },
    { status: 200 }
  );
}
