import { SignedOut, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link
          href={"/"}
          className="w-36"
        >
          Vortex Events
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button
              asChild
              className="rounded-full size-lg"
            >
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
