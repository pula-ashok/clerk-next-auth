import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* logo */}
        <Link href="/" className="text-2xl font-extrabold cursor-pointer group">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">Auth</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">App</span>
        </Link>
        {/* nav links */}
        <nav>
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                {/* <li><Link href='/sign-in'>Sign In</Link></li> */}
                <SignedIn>
                  <UserButton/>
                </SignedIn>
                <SignedOut>
                  <SignInButton/>
                </SignedOut>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
