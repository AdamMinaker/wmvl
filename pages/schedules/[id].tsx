import { Transition, Dialog } from '@headlessui/react'
import { Prisma } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { Fragment, useState } from 'react'
import Calendar from '../../components/Calendar'
import Grid from '../../components/Grid'
import SchedulesTable from '../../components/SchedulesTable'
import Table from '../../components/StandingsTable'
import prisma from '../../prisma'

interface Props {
  posts: Prisma.PostsSelect[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.posts.findMany({
    orderBy: [{ updatedAt: 'desc' }]
  })

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) }
  }
}

export default function Home({  }: Props) {
  const [open, setOpen] = useState(true)
  return (
    <>
        <main className='flex-1'>
        <div className='py-6'>
          <div className='mx-auto max-w-7xl sm:px-6 md:px-8'>
            <h1 className='text-2xl font-semibold dark:text-[#d8d4cf] text-gray-900'>Schedules</h1>
          </div>
          <SchedulesTable />
          
        </div>
      </main>
    </>
  )
}
