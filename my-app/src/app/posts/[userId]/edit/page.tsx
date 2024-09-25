import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateUser } from "@/server_action/serverAction";

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
    <form action={updateUser}>
      <input type="hidden" name="id" value={user.id} />
      <input type="text" name="name" placeholder="type Name" defaultValue={user.name} className="text-black" />
      <button type="submit">Update</button>
    </form>
  );
};

export default PostPage;
