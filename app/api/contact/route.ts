import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const ADMIN_EMAIL = "sonam@yoldongcarpets.com";
const TEMPLATE_ID_ADMIN = 1;
const CONTACT_LIST_ID = 2;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const headers = {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    };

    // 1. Send admin notification email
    const emailPayload = {
      to: [{ email: ADMIN_EMAIL }],
      templateId: TEMPLATE_ID_ADMIN,
      params: {
        NAME: name,
        EMAIL: email,
        MESSAGE: message || "",
      },
    };

    await axios.post("https://api.brevo.com/v3/smtp/email", emailPayload, {
      headers,
    });

    // 2. Create/update Brevo contact
    await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        attributes: {
          NAME: name,
          EMAIL: email,
          SOURCE: "Contact Form",
        },
        listIds: [CONTACT_LIST_ID],
        updateEnabled: true,
      },
      { headers }
    );

    return NextResponse.json({ message: "Email sent & contact saved" });
  } catch (err: any) {
    console.error("Brevo API error:", err.response?.data || err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
