import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Detail from "./components/detail";

type PostPageProps = {
  params: {
    userId: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    return notFound();
  }
  return (
    <>
      <Detail name={user.name} />
    </>
  );
};

export default PostPage;
