import React, {ReactElement, useEffect, useState} from 'react'
import Dropdown from '../dropdown/NavDropdown';

interface Props {
    transparent? : boolean
}

function HomeNavbar(props: Props): ReactElement {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [shadowOn, setShadowOn] = useState<boolean>(false)

    const nav_options = [
        {
            option: "i'm new here?",
            id: "1",
            location: '/becomeaseller'
        }
    ]

    // put shadow on after scrolling down
    const toggleShadow = () => {
      if (window.scrollY >= 80) {
        setShadowOn(true)
      } else {
        setShadowOn(false)
      }
    }

    useEffect(()=>{
        window.addEventListener('scroll', toggleShadow)
    },[])

    return (
        <nav  className={`${shadowOn ? 'shadow' : 'shadow-none'} + fixed w-full bg-white flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`}>

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={"text-blue-900 title-lg text-lg font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              href="#"
            >
              ONEROOF
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden")}id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {
                    nav_options.map(option=>(
                        <li className="flex items-center">
                            <a
                            className={"lg:text-blue-900 lg:hover:bg-gray-100 py-3 px-4 mr-2 rounded-full text-blue-900 hover:bg-gray-100 flex items-center text-sm uppercase font-semibold"}
                            href={option.location}
                            >
                            <span className="inline-block">{option.option}</span>
                            </a>
                        </li>
                    ))
                }
              <li className="flex items-center">
                <Dropdown/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default HomeNavbar
