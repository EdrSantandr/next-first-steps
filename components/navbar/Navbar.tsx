import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink } from "../active-link/ActiveLink"




const NavItem = [
  {path: "/about", label: "About"}, 
  {path: "/pricing", label: "Pricing"}, 
  {path: "/contact", label: "Contact"}, 
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800/30 p-2 m-2 rounded">
        <Link href="/" className="flex items-center font-bold mr-2">  
          <HomeIcon size={15} className="mr-2"/>
          <span>Home</span>
        </Link>
        
        <div className="flex flex-1"></div>
        {
          NavItem.map( ({path, label}) => (
            <ActiveLink key={path} href={path} text={label} />
          ) )
        }        
    </nav>
  )
}
