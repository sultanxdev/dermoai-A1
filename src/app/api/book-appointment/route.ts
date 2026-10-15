import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.treatment) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      name: String(body.name).trim(),
      phone: String(body.phone).trim(),
      treatment: String(body.treatment).trim(),
      preferredDate: body.preferredDate ? String(body.preferredDate) : "",
      preferredTime: body.preferredTime ? String(body.preferredTime) : "",
      message: body.message ? String(body.message).trim() : "",
      source: body.source || "Website Booking Form",
      submittedAt: new Date().toISOString(),
    };

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          console.warn(`Google Apps Script responded with status ${response.status}`);
        }
      } catch (scriptErr) {
        console.error("Error sending to Google Apps Script:", scriptErr);
      }
    } else {
      console.log("📝 Appointment request received (Local mode):", payload);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully",
        data: payload,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Booking API error:", error);
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
    { status: "ok", endpoint: "/api/book-appointment" },
    { status: 200 }
  );
}
