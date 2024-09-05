import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const { firstName, lastName, email, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return new Response("All fields must be filled", {
      status: 400,
    });
  }

  try {
    await prisma.message.create({
      data: {
        firstName,
        lastName,
        email,
        message,
      },
    });

    return new Response("Message has been sent", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(messages);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
