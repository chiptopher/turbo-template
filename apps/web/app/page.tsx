import { prisma } from "@repo/database";
import { Button } from "@repo/ui/button";

export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="text-slate-200">Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <Button appName="Template">Hello</Button>
    </div>
  );
}
