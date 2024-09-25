import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialUsers = [{ name: "John" }, { name: "Nancy" }, { name: "Mike" }];

const seed = async () => {
  // Clean up before the seeding (optional)
  await prisma.user.deleteMany();

  for (const user of initialUsers) {
    await prisma.user.create({ data: user });
  }
};

seed();
