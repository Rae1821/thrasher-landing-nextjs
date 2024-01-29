import Link from 'next/link';


const Navbar = () => {
  return (
    <nav>
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row cursor-pointer text-xs tracking-wider uppercase">
            <Link href="/" className="font-sans hover:text-cyan-600">Home</Link>
            <Link href="#events" className="font-sans hover:text-cyan-600">Events</Link>
            <Link href="#documents" className="font-sans hover:text-cyan-600">Documents</Link>
            <Link href="#about" className="font-sans hover:text-cyan-600">About</Link>
            <Link href="#newsletter" className="font-sans hover:text-cyan-600">Newsletter</Link>
        </ul>
    </nav>
  )
}

export default Navbar


