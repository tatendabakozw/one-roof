import React, {ReactElement, Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function Dropdown():ReactElement {
    return (
        <Menu as="div" className="z-50 relative inline-block text-left">
        {({ open }) => (
            <>
            <div>
                <Menu.Button className="flex flex-row items-center justify-center w-full rounded-full border border-blue-300 shadow-sm px-4 py-2 bg-white text-sm font-semi-bold text-blue-900 hover:shadow-lg focus:outline-none">
                <MenuIcon/>
                    <p className="font-semibold ml-2 uppercase">menu</p>
                </Menu.Button>
            </div>

            <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                          <span>
                          <Link href="/auth/signup">
                              <a className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm cursor-pointer')}>Sign Up</a>
                          </Link>
                      </span>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <span>
                            <Link href="/auth/login">
                                <a className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm cursor-pointer')}>Log In</a>
                            </Link>
                        </span>
                    )}
                    </Menu.Item>
                    <div className="border-b border-gray-200 my-2" />
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        License
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
            </>
        )}
    </Menu>
  )
}

export default Dropdown
