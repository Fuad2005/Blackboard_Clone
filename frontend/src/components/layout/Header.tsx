import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import NavLink from 'next/link';
import { useGlobalState, setGlobalState } from '@/utils/globalState';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  const [darkMode] = useGlobalState('darkMode');

  const handleLocalStorage = useCallback(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === null) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('darkMode', prefersDarkMode.toString());
      setGlobalState('darkMode', prefersDarkMode);
    } else {
      setGlobalState('darkMode', storedDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setGlobalState('darkMode', !darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  }, [darkMode]);

  useEffect(() => {
    handleLocalStorage();
  }, [handleLocalStorage]);



  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);


  

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              width={30}
              height={30}
              className="mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              FD Course
            </span>
          </NavLink>
          <div className="flex items-center lg:order-2">
            <NavLink href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Log in
            </NavLink>
            <NavLink href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Get started
            </NavLink>
            <button onClick={toggleDarkMode} id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg id="theme-toggle-dark-icon" className="block dark:hidden  w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                <svg id="theme-toggle-light-icon" className="hidden dark:block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
                <svg className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`${menuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {['Home', 'Company', 'Marketplace', 'Features', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
