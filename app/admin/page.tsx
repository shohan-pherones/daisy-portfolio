import Messages from "@/components/Messages";
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db";

const AdminPage = async () => {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="wrapper">
      <SectionTitle title="Messages" />
      <Messages messages={messages} />
    </div>
  );
};

export default AdminPage;
