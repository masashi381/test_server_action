import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateUser } from "@/server_action/serverAction";
import { HomeBtn } from "@/app/components/homeBtn";
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
      <form action={updateUser} className="mt-5 ml-5">
        <input type="hidden" name="id" value={user.id} />
        <input type="text" name="name" placeholder="type Name" defaultValue={user.name} className="text-black mr-2" />
        <button type="submit" className="border px-2">
          Update
        </button>
      </form>
      <HomeBtn />
    </>
  );
};

export default PostPage;
