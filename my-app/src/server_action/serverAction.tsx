import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  "use server";

  const name = formData.get("name") as string;

  await prisma.user.create({ data: { name } });
  revalidatePath("/");
};

export const updateUser = async (formData: FormData) => {
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
export const deleteUser = async (id: string) => {
  "use server";

  await prisma.user.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};
