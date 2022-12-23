import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Dropright from './Dropright'

const tiers = [
  {
    id: 1,
    name: 'Tier 1',
    teams: [
      {
        id: 1,
        name: 'Die Booben',
        link: '#'
      },
      { id: 2, name: 'Court Jesters', link: '#' },
      {
        id: 3,
        name: 'Dream Team',
        link: '#'
      },
      {
        id: 4,
        name: 'Monstars',
        link: '#'
      }
    ]
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='z-10 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base md:text-sm font-medium rounded-md dark:text-[#aea79d] dark:hover:bg-[#1a1d1e] dark:hover:text-[#d8d4cf] w-full'>
          Schedules
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
        <Menu.Items className='z-50 dark:bg-[#171a1b] dark:text-[#d8d4cf] absolute mt-2 w-36 -top-2 left-[25px] md:left-[156px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {tiers.map((tier) => (
              <Dropright key={tier.name} title={tier.name} items={tier.teams} />
            ))}

            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}