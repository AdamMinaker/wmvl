import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Id Hit That',
    rank: '1',
    matchesPlayed: '5',
    setsWon: '17',
    setsLost: '5'
  },
  {
    name: 'Jane Cooper',
    rank: '2',
    matchesPlayed: '5',
    setsWon: '17',
    setsLost: '5'
  },
  {
    name: 'Jane Cooper',
    rank: '3',
    matchesPlayed: '5',
    setsWon: '17',
    setsLost: '5'
  },
  {
    name: 'Jane Cooper',
    rank: '4',
    matchesPlayed: '5',
    setsWon: '17',
    setsLost: '5'
  },
  {
    name: 'Jane Cooper',
    rank: '5',
    matchesPlayed: '5',
    setsWon: '17',
    setsLost: '5'
  }
  // More people...
]

export default function Example() {
  return (
    <ul role='list' className='mx-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {people.map((person) => (
        <li key={person.rank} className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
          <div className='flex w-full items-center justify-between space-x-6 p-6'>
            <div className='flex-1 truncate'>
              <div className='flex items-center space-x-3'>
                <h3 className='truncate text-sm font-medium text-gray-900'>{person.name}</h3>
                {person.rank === '1'}
                <span
                  className={
                    person.rank === '1'
                      ? 'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800'
                      : person.rank === '2'
                      ? 'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800'
                      : person.rank === '3'
                      ? 'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800'
                      : 'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800'
                  }
                >
                  {person.rank}
                </span>
              </div>
              <p className='mt-1 truncate text-sm text-gray-500'>
                Matches played: <b>{person.matchesPlayed}</b>
              </p>
              <p className='mt-1 truncate text-sm text-gray-500'>
                Sets won: <b>{person.setsWon}</b>
              </p>
              <p className='mt-1 truncate text-sm text-gray-500'>
                Sets lost: <b>{person.setsLost}</b>
              </p>
              <p className='mt-1 truncate text-sm text-gray-500'>
                Uniform violations: <b>{person.setsLost}</b>
              </p>
              <p className='mt-1 truncate text-sm text-gray-500'>
                Default violations: <b>{person.setsLost}</b>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
