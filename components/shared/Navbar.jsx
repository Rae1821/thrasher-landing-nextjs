import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex w-full cursor-pointer flex-col items-start gap-5 text-xs uppercase tracking-wider md:flex-row md:justify-between">
        <Link href="/" className="font-sans hover:text-cyan-600">
          Home
        </Link>
        <Link href="#events" className="font-sans hover:text-cyan-600">
          Events
        </Link>
        <Link href="#documents" className="font-sans hover:text-cyan-600">
          Documents
        </Link>
        <Link href="#about" className="font-sans hover:text-cyan-600">
          About
        </Link>
        <Link href="#newsletter" className="font-sans hover:text-cyan-600">
          Newsletter
        </Link>
        <Link href="/account" className="font-sans hover:text-cyan-600">
          My Account
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
