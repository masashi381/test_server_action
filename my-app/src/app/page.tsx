import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/lists", RedirectType.replace);
}
