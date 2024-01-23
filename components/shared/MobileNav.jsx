import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Link from 'next/link';


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
                <Image
                    src="/icons/logo.svg"
                    alt="logo"
                    width={32}
                    height={32}
                />
                <Separator className="border border-gray-50" />
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Documents</Link>
                <Link href="/">About</Link>
                <Link href="/">Newsletter</Link>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav
