import { useState } from 'react'
import Grid from './Grid'

const transactions = [
  {
    id: '2022-11-22',
    company: 'Thursday',
    share: 'Dakota Community Centre',
    commission: 'Court 6',
    price: '9:45',
    quantity: 'Id Hit That',
  },
  {
    id: '2022-11-29',
    company: 'Tuesday',
    share: 'MBCI Red',
    commission: 'S',
    price: '9:15',
    quantity: 'Decepticons',
  },
  {
    id: '2022-12-06',
    company: 'Tuesday',
    share: 'MBCI Blue',
    commission: 'N',
    price: '9:15',
    quantity: 'School of Block',
  }
  // More transactions...
]

export default function Example() {
  const [showTable, setShowTable] = useState(true)

  return (
    <>
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <span className='mt-3 isolate inline-flex rounded-md shadow-sm'>
            <button
            onClick={() => setShowTable(true)}
              type='button'
              className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 '
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                />
              </svg>
            </button>

            <button
            onClick={() => setShowTable(false)}
              type='button'
              className='relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 '
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z'
                />
              </svg>
            </button>
          </span>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <button
            type='button'
            className='inline-flex items-center rounded-md border dark:hover:bg-gray-700 dark:border-[#363b3d] border-gray-300 dark:text-[#d8d4cf] dark:bg-[#1a1d1e] bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50'
          >
            Add to calendar
          </button>
        </div>
      </div>
      {showTable &&
      <div className='mt-3 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='text-center whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                      Date
                    </th>
                    <th scope='col' className='text-center whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Weekday
                    </th>
                    <th scope='col' className='text-center px-2 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Location
                    </th>
                    <th scope='col' className='text-center px-2 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Court
                    </th>
                    <th scope='col' className='text-center px-2 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Time
                    </th>
                    <th scope='col' className='text-center px-2 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Opponent
                    </th>
                  
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className='whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6'>{transaction.id}</td>
                      <td className='whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900'>{transaction.company}</td>
                      <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-900'>{transaction.share}</td>
                      <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>{transaction.commission}</td>
                      <td className='text-center whitespace-nowrap px-2 py-2 text-sm text-gray-500'>{transaction.price}</td>
                      <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>{transaction.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>}
    </div>
       {!showTable && <Grid />}
       </>
  )
}
