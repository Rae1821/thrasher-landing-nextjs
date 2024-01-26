


const Navbar = () => {
  return (
    <nav>
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row cursor-pointer text-xs tracking-wider uppercase">
            <li className="font-sans hover:text-cyan-600">Home</li>
            <li className="font-sans hover:text-cyan-600">Events</li>
            <li className="font-sans hover:text-cyan-600">Documents</li>
            <li className="font-sans hover:text-cyan-600">About</li>
            <li className="font-sans hover:text-cyan-600">Newsletter</li>
        </ul>
    </nav>
  )
}

export default Navbar


