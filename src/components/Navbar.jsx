import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white shadow-md border-b border-gray-300 font-inter px-6 md:px-12'>
      <nav className='px-4 py-3 flex justify-between items-center'>
        <a href='/' className='text-xl font-bold'>E-SHOP</a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-7">
          <li className="nav-item">New & Featured</li>
          <li className="nav-item">Categories</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <div className="bg-black h-8 w-[1.5px]"></div>
          <BsCart3 className="size-7 nav-item" />
          <CgProfile className="size-7 nav-item" />
        </ul>

        <button className="md:hidden nav-item" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX className="size-7" /> : <HiOutlineMenu className="size-7" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li className="nav-item">New & Featured</li>
            <li className="nav-item">Categories</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact Us</li>
            <div className="bg-black h-[1.5px] w-full"></div>
            <div className="flex justify-center gap-7 mt-2">
              <BsCart3 className="size-8 nav-item" />
              <CgProfile className="size-8 nav-item" />
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar