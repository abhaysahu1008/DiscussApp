'use client'
import { signOut } from "@/actions/sign-out";
import { signIn } from "@/actions/signin";
import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

const AuthHeader = () => {
  const { data: session, status } = useSession();
  // const session = auth();

  // loading state (optional but better)
  if (status === "loading") return null;

  const user = session?.user;

  // NOT LOGGED IN
  if (!user) {
    return (
      <>
        <form action={signIn}>
          <Button variant="outline">Sign in</Button>
        </form>
        <form action={signIn}>
          <Button>Sign up</Button>
        </form>
      </>
    );
  }

  // LOGGED IN
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src={user.image || ""} alt={user.name || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent>
        <h1>{user.name}</h1>
        <Separator className="my-2" />
        <form action={signOut}>
          <Button type="submit">
            <LogOut /> Sign Out
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default AuthHeader;
