import Image from "next/image";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
      <div className="flex items-end">
        <div>
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
        </div>
        <div>
          <p className="ml-1 font-sans text-xs font-semibold tracking-wide">
            Thrasher <span className="-mt-1 block font-semibold">Landing</span>
          </p>
        </div>
      </div>
      <SignedIn>
        <div className="hidden md:flex">
          <Navbar />
        </div>
      </SignedIn>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <MobileNav />
      </SignedIn>
      <SignedOut>
        <Button asChild className="rounded-full" size="lg">
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </header>
  );
};

export default Header;

{
  /* <header class="header">
            <div class="logo">
                <a href="index.html" alt="home link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                </a>

            </div>
            <!-- Navbar -->
            <button class="mobile-nav-toggle" aria-controls="primary-navigation">
                <span class="sr-only">Menu</span>
                <span class="hamburger"></span>
            </button>
            <nav>
                <ul id="primary-navigation" data-visible="false" class="primary-navigation">
                    <li class="active">
                        <a class="nav--link" href="index.html">home</a>
                    </li>
                    <li>
                        <a class="nav--link" href="#events">events</a>
                    </li>
                    <li>
                        <a class="nav--link" href="#documents">documents</a>
                    </li>
                    <li>
                        <a class="nav--link" href="#about">about</a>
                    </li>
                    <li>
                        <a class="nav--link" href="#newsletter">newsletter</a>
                    </li>
                </ul>
            </nav>
        </header> */
}
