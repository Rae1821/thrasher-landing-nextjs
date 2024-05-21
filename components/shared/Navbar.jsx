import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex w-full cursor-pointer flex-col items-start gap-5 text-xs uppercase tracking-wider md:flex-row md:justify-between">
        {navLinks.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
