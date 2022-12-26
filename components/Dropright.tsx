import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

interface DroprightProps {
  //[key: string]: any // allows dynamic keys and values
  title: string
  items: { id: number; name: string; link: string }[]
  standings: boolean
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ title, items, standings }: DroprightProps) {
  return (
    <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='dark:bg-[#171a1b] dark:text-[#aea79d] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf] text-gray-600 hover:bg-gray-50 hover:text-gray-900 inline-flex w-full justify-left bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none'>
          {title}
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
        <Menu.Items className={standings ? 'dark:bg-[#171a1b] absolute -bottom-[328px] left-[148px] mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' : 'dark:bg-[#171a1b] absolute -bottom-[292px] left-[148px] mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'}>
          <div className='py-1'>
            {standings && (
              <Menu.Item key='341411231'>
                {({ active }) => (
                  <Link
                    href='/standings/1'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-medium dark:text-[#aea79d] dark:bg-[#171a1b] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf]'
                    )}
                  >
                    {title} Standings
                  </Link>
                )}
              </Menu.Item>
            )}
            {items.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    href={item.link}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-medium dark:text-[#aea79d] dark:bg-[#171a1b] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf]'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
