import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      vehicle,
      message,
    } = body;

    if (!name || !email || !vehicle) {
      return Response.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Peak Auto <onboarding@resend.dev>",
      to: ["dutchjason83@gmail.com"],
      subject: `New Peak Auto Quote — ${vehicle}`,
      text: `
NEW QUOTE REQUEST

Name: ${name}
Email: ${email}
Vehicle: ${vehicle}

Quote Details:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Failed to send quote." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}