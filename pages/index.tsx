import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Dropdown from '../components/Dropdown'
import Layout from '../components/Layout'

import header from '../public/logo.gif'
import Heading from '../components/Heading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Winnipeg Men&apos;s Volleyball League</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <main className='flex-1'>
          <div className='py-6'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
              <h1 className='text-2xl font-semibold dark:text-[#d8d4cf] text-gray-900'>Home</h1>
            </div>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
              <div className='py-4'>
                <Heading />

                <p className='my-3 mb-12'>
                  Hey Guys - so we have 67 teams so far. 17 Wing will not be playing in the league to start. A number of returning teams are rejoining
                  the league so that will necessitate some tier adjustments for the regular season. I will let you know asap if that will affect the
                  night that your team may play on. Otherwise get your balance of fees in by September 30 and get your team registered with Volleyball
                  Manitoba. Round 1 will start the week of October 2nd. If you know another team who would like to join please let me know as we would
                  like to get to 72 teams and have fully balanced schedules.
                </p>
                <Heading />
                <p className='my-3'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}
