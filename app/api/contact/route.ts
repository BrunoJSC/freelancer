import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Resend API key is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <contato@brunocarmo.dev>",
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
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
