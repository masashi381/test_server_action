"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath("/");
};

// export const deleteUser = async (id: string) => {
//   await prisma.user.delete({
//     where: {
//       id,
//     },
//   });

//   revalidatePath("/");
// };
