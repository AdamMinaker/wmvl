import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const items = [
  {
    id: 1,
    name: 'By-laws',
    link: '#'
  },
  {
    id: 2,
    name: 'Constitution',
    link: '/constitution'
  },
  {
    id: 3,
    name: 'Executive',
    link: '#'
  },
  {
    id: 4,
    name: 'General Information 2022-2023',
    link: '#'
  },
  {
    id: 5,
    name: 'Venues',
    link: 'https://www.google.com/maps/d/u/0/viewer?hl=en&ie=UTF8&vps=1&jsv=271c&oe=UTF8&msa=0&mid=1p-Ugq2kxnXNvI3TJTtkpOJDHGAE&ll=49.68439628373529%2C-97.27361700000002&z=10'
  },
  {
    id: 6,
    name: 'Scoresheet',
    link: '#'
  },
  {
    id: 7,
    name: 'Scoresheet stickers',
    link: '#'
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base md:text-sm font-medium rounded-md dark:text-[#aea79d] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf] w-full'>
          About
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='z-50 dark:bg-[#171a1b] dark:text-[#d8d4cf] absolute mt-2 w-36 -top-2 left-[15px] md:left-[156px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {items.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <a
                    href={item.link}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-medium dark:text-[#aea79d] dark:bg-[#171a1b] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf]'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
