import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ Resend API key is missing in environment variables");
    return NextResponse.json(
      { error: "Resend API key is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    console.log(`📧 Attempting to send email from: ${email}`);

    const { data, error } = await resend.emails.send({
      from: "Portfolio <contato@brunojs.dev>",
      to: ["brunojscarmo@gmail.com"],
      subject: `Nova mensagem de ${firstName} ${lastName}`,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return NextResponse.json(
        { error: error.message || error.name || "Unknown Resend error" },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Unexpected Error in Contact API:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
