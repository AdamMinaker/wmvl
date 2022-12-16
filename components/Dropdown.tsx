import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Dropright from './Dropright'

interface DroprightProps {
  //[key: string]: any // allows dynamic keys and values
  title: string
}

const items = [
  { id: 1, title: 'Die Booben', link: '#' },
  { id: 2, title: 'Court Jesters', link: '#' },
  { id: 3, title: 'Dream Team', link: '#' },
  { id: 4, title: 'Monstars', link: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ title }: DroprightProps) {
  return (
    <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 inline-flex w-full justify-left rounded-md bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'>
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
        <Menu.Items className='absolute mt-2 w-36 -top-2 left-[25px] md:left-[156px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Dropright title={'Tier 1'} items={items} />
            <Dropright title={'Tier 2'} items={items} />
            <Dropright title={'Tier 3'} items={items} />
            <Dropright title={'Tier 4'} items={items} />
            <Dropright title={'Tier 5'} items={items} />
            <Dropright title={'Tier 6'} items={items} />
            <Dropright title={'Tier 7'} items={items} />
            <Dropright title={'Tier 8'} items={items} />
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
