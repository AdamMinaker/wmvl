import { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ScheduleDropdown from './SchedulesDropdown'
import header from '../public/logo.gif'
import Image from 'next/image'
import ScoresDropdown from './ScoresDropdown'
import AboutDropdown from './AboutDropdown'
import PlayersWantedDropdown from './PlayersWantedDropdown'
import { useGlobalContext } from '../contexts'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const navigation = [
  { name: 'Home', href: '/', dropDown: false, current: false },
  { name: 'Schedules', href: '#', dropDown: true, renderDropDown: <ScheduleDropdown key={1412}/>, current: false },
  { name: 'Scores', href: '#', dropDown: true, renderDropDown: <ScoresDropdown key={3523}/>, current: false },
  { name: 'About', href: '#', dropDown: true, renderDropDown: <AboutDropdown key={6284}/>, current: false },
  { name: 'Players wanted', href: '#', dropDown: true, renderDropDown: <PlayersWantedDropdown key={8233}/>, current: false },
  { name: 'Email us', href: '#', dropDown: false, current: false },
  { name: 'FAQ', href: '#', dropDown: false, current: false },
  { name: 'Links', href: '#', dropDown: false, current: false },
  { name: 'Photo library', href: 'https://drive.google.com/drive/folders/1_tlRiOEcOnLv2y9-nm5x9XeDevsa-qJS', dropDown: false, current: false },
  { name: 'Pictures', href: 'https://wmvl.com/index.pl?class=Pictures&method=View&username=GUEST', dropDown: false, current: false },
  { name: 'Team contacts', href: '#', dropDown: false, current: false },
  { name: 'Tournaments', href: 'http://www.manitobavolleyball.com/index.asp?Page=86', dropDown: false, current: false },
  { name: 'Code of conduct', href: 'https://volleyball.ca/uploads/Policies/2020/Pan_Canadian_Policy_-_Code_of_Conduct_and_Ethics_-_Oct_2020.pdf', dropDown: false, current: false },
  { name: 'Rule book', href: 'https://volleyball.ca/uploads/Development/Referee/Rules/Rulebook_2018-19_EN_FINAL_-_updated_Oct_2018.pdf', dropDown: false, current: false },
  { name: 'Violations', href: 'https://drive.google.com/drive/folders/1K4RRtP9wfn5yzLgOOg8PrqI3Hs_hXkPU', dropDown: false, current: false }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {  
  //const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const { sidebarOpen, setSidebarOpen } = useGlobalContext()

  useEffect(() => {
    setMounted(true)
  })

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button onClick={() => setTheme('light')}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>
        </button>
      )
    } else {
      return (
        <button onClick={() => setTheme('dark')}>
          {' '}
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        </button>
      )
    }
  }

  return (
    <>
      <div className='rounded md:w-[954px] mx-auto'>
        <Image priority className='md:my-2 md:rounded mx-auto' src={header} alt='WMVL logo with players in the background.' />

        <div className='h-full'>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as='div' className='relative z-40 md:hidden' onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
              </Transition.Child>

              <div className='fixed inset-0 z-40 flex'>
                <Transition.Child
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'
                >
                  <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-[#171a1b]'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-300'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute top-0 right-0 -mr-12 pt-2'>
                        <button
                          type='button'
                          className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className='sr-only'>Close sidebar</span>
                          <XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                      <div className='flex flex-shrink-0 items-center px-4'>{renderThemeChanger()}</div>
                      <nav className='mt-5 space-y-1 px-2'>
                        {navigation.map((item) =>
                          item.dropDown ? (
                            item.renderDropDown
                          ) : (
                            <Link
                              onClick={() => setSidebarOpen(false)}
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md dark:text-[#aea79d] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf]'
                              )}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </nav>
                    </div>
                    <div className='flex flex-shrink-0 border-t border-gray-200 dark:border-[#363b3d] p-4'>
                      <a href='#' className='group block flex-shrink-0'>
                        <div className='flex items-center'>
                          <div>
                            <img
                              className='inline-block h-10 w-10 rounded-full'
                              src='https://imgs.search.brave.com/nswnwmV096xaGP76PGsqXD8uFWqIq0VcL7nm_I4MHrw/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9yYS5h/Yy5hZS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wMi91c2Vy/LWljb24tcGxhY2Vo/b2xkZXIucG5n'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>Admin</p>
                            <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>Logout</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className='w-14 flex-shrink-0'>{/* Force sidebar to shrink to fit close icon */}</div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className='overflow-visible hidden md:absolute transform translate-y-44 h-4/6 md:inset-y-0 md:flex md:w-40 md:flex-col'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex flex-1 flex-col border-r border-gray-200 bg-white dark:border-[#363b3d] dark:bg-[#181a1b]'>
              <div className='flex flex-1 flex-col overflow-visible pt-5 pb-4 dark:bg-[#131516]'>
                <div className='flex flex-shrink-0 items-center px-4'>{renderThemeChanger()}</div>
                <nav className='mt-5 flex-1 space-y-1 bg-white dark:bg-[#131516] px-2'>
                  {navigation.map((item) =>
                    item.dropDown ? (
                      item.renderDropDown
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md dark:text-[#aea79d] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf]'
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
              </div>
              <div className='flex flex-shrink-0 border-t border-gray-200 dark:border-[#363b3d] dark:bg-[#131516] p-4'>
                <a href='#' className='group block w-full flex-shrink-0'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-9 w-9 rounded-full'
                        src='https://imgs.search.brave.com/nswnwmV096xaGP76PGsqXD8uFWqIq0VcL7nm_I4MHrw/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9yYS5h/Yy5hZS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wMi91c2Vy/LWljb24tcGxhY2Vo/b2xkZXIucG5n'
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Admin</p>
                      <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>Logout</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col md:pl-40'>
            <div className='sticky top-0 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden dark:bg-[#1f2022]'>
              <button
                type='button'
                className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
