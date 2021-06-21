import React, {ReactElement, useEffect, useState, Fragment} from 'react'
import Link from 'next/link';
import Dropdown from '../dropdown/NavDropdown';
import { Transition } from '@headlessui/react'
import HomeSearch from '../search/HomeSearch';
import MenuIcon from '@material-ui/icons/Menu'
import nav_options from '../../helpers/nav_option'

interface Props {
    transparent? : boolean
}

function HomeNavbar(props: Props): ReactElement {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [shadowOn, setShadowOn] = useState<boolean>(false)

    // const nav_options = [
    //     {
    //         option: "i'm new here?",
    //         id: "1",
    //         location: '/becomeaseller'
    //     }
    // ]

    // put shadow on after scrolling down
    const toggleShadow = () => {
      if (window.scrollY >= 500) {
        setShadowOn(true)
      } else {
        setShadowOn(false)
      }
    }

    useEffect(()=>{
        window.addEventListener('scroll', toggleShadow)
    },[])

    return (
        <nav  className={`${shadowOn ? 'shadow-lg fixed mb-16 transition duration-1500 ease-in-out' : 'shadow-none'} + w-full z-50 bg-white flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg`}>

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              
            <Link href='/' >
              <a className={"text-blue-900 title-lg text-lg font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"}>ONEROOF </a>
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <span
                className={"text-blue-900"}
              >
                <MenuIcon/>
              </span>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden")}id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
              {
                nav_options.left_options.map(option=>(
                  <li className={"lg:text-blue-900 lg:hover:bg-gray-100 py-3 px-4 mr-2 rounded-full text-blue-900 hover:bg-gray-100 flex items-center text-sm uppercase font-semibold"}>{option.option}</li>
                ))
              }
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <Transition
                    as={Fragment}
                    show={shadowOn}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-[-10deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                  >
                  <li className={`${shadowOn ? 'flex' : 'hidden'} flex items-center mr-2`}>
                    <div className="flex w-full"><HomeSearch /></div>
                  </li>
                  </Transition>
                {
                    nav_options.nav_options.map(option=>(
                        <li key={option.id} className="flex items-center">
                            <a
                            className={"lg:text-blue-900 lg:hover:bg-gray-100 py-3 px-4 mr-2 rounded-full text-blue-900 hover:bg-gray-100 flex items-center text-sm uppercase font-semibold"}
                            href={option.location}
                            >
                            <span className="inline-block">{option.option}</span>
                            </a>
                        </li>
                    ))
                }
              <li className="lg:flex md:flex hidden items-center">
                <Dropdown/>
              </li>

              {nav_options.mobile_nav_options.map(option =>(
                <li key={option.id} className="items-center lg:hidden md:hidden flex">
                    <a
                    className={"lg:text-blue-900 lg:hover:bg-gray-100 py-3 px-4 mr-2 rounded-full text-blue-900 hover:bg-gray-100 flex items-center text-sm uppercase"}
                    href={option.location}
                    >
                    <span className="inline-block">{option.option}</span>
                    </a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    )
}

export default HomeNavbar
