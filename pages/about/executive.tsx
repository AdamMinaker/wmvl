import Head from 'next/head'
import { Inter } from '@next/font/google'
import NewPost from '../../components/NewPost'
import { GetServerSideProps } from 'next'
import prisma from '../../prisma'
import { Prisma } from '.prisma/client'
import Post from '../../components/Post'
import { useRouter } from 'next/router'
import Executive from '../../components/Executive'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  return (
    <>
      <main className='flex-1'>
        <div className='py-6'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <h1 className='text-2xl font-semibold dark:text-[#d8d4cf] text-gray-900'>Executive</h1>
          </div>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <div className='py-4'>
              <Executive />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
