import React, { useEffect, useState } from 'react';
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoMdSearch } from 'react-icons/io';
import { TbMenu2, TbMenu3 } from 'react-icons/tb';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header>
        <nav
          className={`w-screen px-10  md:px-20 md:h-[14vh] h-[12vh] mx-auto flex bg-white  z-50  items-center justify-between fixed top-0 left-0 right-0 ${isScrolled ? ' shadow-2xl' : ''}`}
        >
          <div>
            <a href="/" className="text-3xl font-bold">
              🌿Veg<span className="text-orange-500 uppercase">o</span>ria
            </a>
          </div>
          <div>
            <ul className="md:flex items-center gap-x-10 hidden">
              <li>
                <a href="" className="font-semibold  text-lg tracking-wider text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-semibold tracking-wider text-lg text-zinc-800 hover:text-orange-500"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-semibold tracking-wider text-lg text-zinc-800 hover:text-orange-500"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-semibold tracking-wider text-lg text-zinc-800 hover:text-orange-500"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex  items-center gap-x-5">
            <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
              <input
                id="text"
                name="text"
                placeholder="search..."
                autoComplete="off"
                className="flex-1 my-auto h-[5vh] px-3 focus:outline-none"
              />
              <button className="text-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full">
                <IoMdSearch />
              </button>
            </div>
            <a href="#" className="text-zinc-800 text-2xl">
              <GoHeartFill />
            </a>
            <a href="#" className="text-zinc-800 text-2xl">
              <HiShoppingBag />
            </a>
            <a href="#" className="text-zinc-800 text-2xl md:hidden" onClick={toggleMenu}>
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </a>
          </div>

          {/*Mobile Device */}

          <ul
            className={`flex flex-col bg-orange-500/15 backdrop-blur-xl rounded-xl gap-y-10 p-10 items-center absolute top-30 -left-1/2 transform -translate-x-1/2  md:hidden transition-all duration-500 ${showMenu ? 'left-1/2' : ''}`}
          >
            <li>
              <a href="" className="font-semibold tracking-wider text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Contact us
              </a>
            </li>

            <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
              <input
                id="text"
                name="text"
                placeholder="search..."
                autoComplete="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="text-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full">
                <IoMdSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
