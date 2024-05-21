import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Navbar from "./Navbar";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="flex items-end">
            <Image src="/icons/logo.svg" alt="logo" width={32} height={32} />
            <p className="ml-1 font-sans text-xs font-semibold tracking-wide">
              Thrasher{" "}
              <span className="-mt-1 block font-semibold">Landing</span>
            </p>
          </div>

          <Separator className="border border-gray-50" />
          {/* <Link href="/" className="cursor-pointer hover:text-cyan-600">Home</Link>
                <Link href="/" className="cursor-pointer hover:text-cyan-600">Events</Link>
                <Link href="/" className="cursor-pointer hover:text-cyan-600">Documents</Link>
                <Link href="/" className="cursor-pointer hover:text-cyan-600">About</Link>
                <Link href="/" className="cursor-pointer hover:text-cyan-600">Newsletter</Link>
                <Link href="/account" className="cursor-pointer hover:text-cyan-600">My Account</Link> */}
          <Navbar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
