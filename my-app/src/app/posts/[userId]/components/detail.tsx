"use client";
// import { useRouter } from "next/navigation";
import { HomeBtn } from "@/app/components/homeBtn";
type UserProps = {
  name: string;
};
const Detail = (props: UserProps) => {
  // const router = useRouter();

  // const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   router.push("/");
  // };
  const { name } = props;
  return (
    <>
      <h2 className="m-y-2">{`Hello, I am ${name}.`}</h2>
      <HomeBtn />
    </>
  );
};

export default Detail;
