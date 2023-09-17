import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SideNav from "./side-nav";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <SideNav session={session} />;
}
