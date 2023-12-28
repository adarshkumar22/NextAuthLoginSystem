import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions); // FAST
  console.log(session);

  if(session?.user) {
    return (
      <div>
        <h2 className='text-4xl'>Welcome back, {session?.user.username}</h2>
        <h2>Client Session</h2>
        <User />
        <h2>Server Session</h2>
        {JSON.stringify(session)}
      </div>
    )
  }

  return <h1 className='text-4xl'>Please Login to see the website. </h1>;
}
