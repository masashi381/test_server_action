import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

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
  return <h2>{user.name}</h2>;
};

export default PostPage;
