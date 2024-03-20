import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h1>Dashboard</h1>
    </div>
  );
}
