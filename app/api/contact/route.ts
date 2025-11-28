import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
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
