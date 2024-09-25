import { prisma } from "@/lib/prisma";
// import Link from "next/link";
import { createUser } from "@/server_action/serverAction";
import { deleteUser } from "@/server_action/deleteSA";
import Lists from "./components/lists";

const page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h2>Home</h2>

      <form action={createUser} className="flex flex-col gap-y-2">
        <input type="text" name="name" placeholder="Please type name" className="text-black" />
        <button type="submit">Create</button>
      </form>
      <Lists users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default page;
