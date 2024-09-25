import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";

const createPost = async (formData: FormData) => {
  "use server";

  const name = formData.get("name") as string;

  await prisma.user.create({ data: { name } });
  revalidatePath("/");
};

const deletePost = async (id: string) => {
  "use server";

  await prisma.user.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};

const Home = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h2>Home</h2>

      <form action={createPost} className="flex flex-col gap-y-2">
        <input type="text" name="name" placeholder="Please type name" className="text-black" />
        <button type="submit">Create</button>
      </form>
      <ul className="flex flex-col gap-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-x-4">
            <div>{user.name}</div>
            <div className="flex items-center">
              <Link href={`/posts/${user.id}`}>Go To</Link> | {""}
              <Link href={`/posts/${user.id}/edit`}>Edit</Link> | {""}
              <form action={deletePost.bind(null, user.id)}>
                <button type="submit">Delete</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
