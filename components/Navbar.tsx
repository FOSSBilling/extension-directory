import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';

const Navbar = () => (
  <div>
    <header>
      <nav className="border-zinc-300 px-4 lg:px-6 py-2.5 bg-zinc-900">
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Left side */}
          <div className="flex justify-start items-center">
            {/* Logo */}
            <Link href="/" className="flex mx-4">
              <Logo className="mr-2" />
              <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
                Extensions
              </span>
            </Link>

            {/* Search bar */}
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-zinc-500 ml-1" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="topbar-search"
                  className="border sm:text-sm rounded-lg block w-full pl-10 p-2.5 bg-zinc-800 border-zinc-700 placeholder-zinc-500 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search extensions"
                />
              </div>
            </form>
          </div>

          {/* Right side */}
          <div className="flex items-center lg:order-2">
            
          </div>

        </div>
      </nav>
    </header>
  </div>
)

export default Navbar