import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const updatePost = async (formData: FormData) => {
  "use server";

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  console.log("get id: " + id);

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  revalidatePath("/");
  redirect("/");
};

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
    <form action={updatePost}>
      <input type="hidden" name="id" value={user.id} />
      <input type="text" name="name" placeholder="type Name" defaultValue={user.name} className="text-black" />
      <button type="submit">Update</button>
    </form>
  );
};

export default PostPage;
