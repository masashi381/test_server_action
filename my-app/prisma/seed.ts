import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts = [{ name: "John" }, { name: "Nancy" }, { name: "Mike" }];

const seed = async () => {
  // Clean up before the seeding (optional)
  await prisma.post.deleteMany();

  for (const post of initialPosts) {
    await prisma.post.create({ data: post });
  }
};

seed();
