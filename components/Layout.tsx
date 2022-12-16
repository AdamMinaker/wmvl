import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Toggle from './Toggle'
import Dropdown from './Dropdown'
import Heading from './Heading'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Schedules', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Scores', href: '#', icon: UsersIcon, current: false },
  { name: 'About', href: '#', icon: FolderIcon, current: false },
  { name: 'Players wanted', href: '#', icon: CalendarIcon, current: false },
  { name: 'Email us', href: '#', icon: InboxIcon, current: false },
  { name: 'FAQ', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Links', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Photo library', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Pictures', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Team contacts', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Tournaments', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Code of conduct', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Rule book', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Violations', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative md:hidden'
            onClose={setSidebarOpen}
          >
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

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white'>
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
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                    <div className='flex flex-shrink-0 items-center px-4'>
                      <Toggle />
                    </div>
                    <nav className='mt-5 space-y-1 px-2'>
                      <Dropdown />
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
                    <div className='ml-1 group block flex-shrink-0'>
                      <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                        Admin
                      </p>
                      <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                        Logout
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0'>
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:absolute transform translate-y-44 h-4/6 md:inset-y-0 md:flex md:w-40 md:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white'>
            <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
              <div className='flex flex-shrink-0 items-center px-4'>
                <Toggle />
              </div>
              <nav className='mt-5 flex-1 space-y-1 bg-white px-2'>
                <Dropdown />
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
              <div className='group block w-full flex-shrink-0'>
                <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                  Admin
                </p>
                <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col md:pl-40'>
          <div className='sticky top-0 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden'>
            <button
              type='button'
              className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <main className='flex-1'>
            <div className='py-6'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>Home</h1>
              </div>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>
                  <Heading />

                  <p className='my-3 mb-12'>
                    Hey Guys - so we have 67 teams so far. 17 Wing will not be
                    playing in the league to start. A number of returning teams
                    are rejoining the league so that will necessitate some tier
                    adjustments for the regular season. I will let you know asap
                    if that will affect the night that your team may play on.
                    Otherwise get your balance of fees in by September 30 and
                    get your team registered with Volleyball Manitoba. Round 1
                    will start the week of October 2nd. If you know another team
                    who would like to join please let me know as we would like
                    to get to 72 teams and have fully balanced schedules.
                  </p>
                  <Heading />
                  <p className='my-3'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className='h-96 rounded-lg border-4 border-dashed border-gray-200'></div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
