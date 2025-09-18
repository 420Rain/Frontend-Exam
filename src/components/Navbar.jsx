import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='bg-white shadow-md border-b border-gray-300 font-inter px-12'>
      <nav className='px-4 py-3 flex justify-between items-center'>
        <a href='/' className='text-xl font-bold'>E-SHOP</a>
        <ul className="flex items-center gap-7">
          <li className="nav-item">New & Featured</li>
          <li className="nav-item">Categories</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <div className="bg-black h-8 w-[1.5px]"></div>
          <BsCart3 className="size-7 nav-item" />
          <CgProfile className="size-7 nav-item" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar