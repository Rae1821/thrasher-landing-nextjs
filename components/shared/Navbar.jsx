


const Navbar = () => {
  return (
    <nav>
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row cursor-pointer text-xs tracking-wider uppercase">
            <li className="montFont">Home</li>
            <li className="montFont">Events</li>
            <li className="montFont">Documents</li>
            <li className="montFont">About</li>
            <li className="montFont">Newsletter</li>
        </ul>
    </nav>
  )
}

export default Navbar


{/* <ul id="primary-navigation" data-visible="false" class="primary-navigation">
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
                </ul> */}