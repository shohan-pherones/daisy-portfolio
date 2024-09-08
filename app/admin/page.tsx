import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db";
import moment from "moment";
import Link from "next/link";

const AdminPage = async () => {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="wrapper">
      <SectionTitle title="Messages" />
      <div className="flex flex-col gap-10">
        {messages.map((message) => (
          <div key={message.id} className="chat chat-start">
            <div className="chat-header flex gap-2.5 items-center">
              {message.firstName + " " + message.lastName}
              <time className="text-xs opacity-50">
                {moment(message.createdAt).startOf("minutes").fromNow()}
              </time>
            </div>
            <div className="chat-bubble">{message.message}</div>
            <Link
              href={`mailto:${message.email}`}
              className="chat-footer opacity-50"
            >
              {message.email}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
