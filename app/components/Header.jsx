import Link from "next/link" //this is an ancher tag

const Header = () => {
  return (
   <header>
      <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost" href='/'> 
    <h1 className="text-2xl font-bold text-primary">Beene .</h1>
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/Resume'>Resume</Link></li>
      <li><Link href='/Work'>Projects</Link></li>
      <li><Link href='/Contact'>Contact</Link></li>
    </ul>
  </div>
</div>
        </div>
   </header>
  )
}

export default Header