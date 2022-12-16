import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface DroprightProps {
  //[key: string]: any // allows dynamic keys and values
  title: string
}

const teams = [
  { team: 'Die Booben' },
  { team: 'Court Jesters' },
  { team: 'Dream Team' },
  { team: 'Monstars' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ title }: DroprightProps) {
  return (
    <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 inline-flex w-full justify-left bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none'>
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
        <Menu.Items className='absolute -bottom-[112px] left-[148px] mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {teams.map((team) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-medium'
                    )}
                  >
                    {team.team}
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
