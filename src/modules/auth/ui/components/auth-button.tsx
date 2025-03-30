"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu items for profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" className="rounded-full">
            <UserCircleIcon />
            Giriş Yap
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
