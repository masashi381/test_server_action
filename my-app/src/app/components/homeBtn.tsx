"use client";
import { useRouter } from "next/navigation";

export const HomeBtn = () => {
  const router = useRouter();

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    router.push("/");
  };
  return (
    <button onClick={clickHandler} className="border mt-2">
      Go Home
    </button>
  );
};
