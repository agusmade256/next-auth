import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const getSession = await getServerSession();
  return (
    <div className="text-2xl font-bold h-[200vh] relative top-20 lg:max-w-3xl mx-auto">
      HOME
      <h1>getServerSession RESULT</h1>
      <p>{getSession?.user?.name}</p>
      <p>{getSession?.user?.email}</p>
      <Image
        src={`${!getSession?.user?.image ? "" : getSession?.user?.image}`}
        width={100}
        height={100}
        alt=""
      />
    </div>
  );
}
