import Head from 'next/head'
import { Inter } from '@next/font/google'
import NewPost from '../components/NewPost'
import { GetServerSideProps } from 'next'
import prisma from '../prisma'
import { Prisma } from '.prisma/client'
import Post from '../components/Post'
import { useRouter } from 'next/router'

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

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: Props) {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  return (
    <>
      <main className='flex-1'>
        <div className='py-6'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <h1 className='text-2xl font-semibold dark:text-[#d8d4cf] text-gray-900'>Home</h1>
          </div>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <div className='py-4'>
              <p>
                Section I A) The League 1. The Winnipeg Mens Volleyball League, is for the promotion of volleyball and shall hereinafter be referred
                to as the League. B) The Board of Directors 1. The League Directors shall be comprised of one representative from each member team in
                good standing and the League Executive. Names of the team representatives shall be filed with the Secretary and they shall be entitled
                to vote on establishing League policies and regulations comprising the Constitution. C) Changes to the Constitution 1. Changes to the
                Constitution maybe made at the Annual Meeting, or at a special Meeting called for that purpose. 2. Notice of motion must be made ten
                (10) days prior to the meeting in writing. 3. A motion from the floor at the Annual or Special Meeting maybe considered providing
                three-quarters (3/4) of those present (Directors) allow it to stand. 4. A Quorum shall consist of one-half (1/2) of the Directors; and
                a two-thirds (2/3) majority vote of members present is required to pass any motion. 5. A petition signed by 7 Directors requesting a
                Special General Meeting may be presented to the Executive and such a Special General Meeting will be called for within 7 days. Section
                II A) The Executive 1. The League Executive shall be duly elected annually by the Directors. 2. The Vice-President shall act in the
                absence of the President. Each League Tier shall be duly represented by at least one League Convenor, with only one vote at Meetings.
                3. The Executive's duties are to see that the Constitution is adhered to by all teams. They shall have complete authority to suspend
                member teams or their personnel for any infraction of the rules and regulations contained in this Constitution. 4. The Executive shall
                arrange all schedules, events or activities subject to approval by the majority vote of all member teams represented and in doing so
                protect the interests of the League in its activities. 5. Any two of three including - President, Vice-President or Treasurer shall be
                the signing authorities for any bank transactions on behalf of the League. The Treasurer, wherever possible, shall be one of the
                signatures. Section III A) Dues 1. The amount of the annual dues shall be determined at the Annual General Meeting of the League. 2.
                All monies left each year after financial commitments have been met shall be retained in reserve by the League to be used as a base
                for financial backing of future League activities in subsequent seasons. 3. A Statement of League finances is to be issued prior to or
                at the Annual General Meeting. 4. A proposed new season League Budget will be presented at the Organizational Meeting for approval of
                the League Directors. Section IV A) Playing Regulations 1. Play shall be governed by the Volleyball Canada rules and regulations as
                set down in the current VC Rule book subject to the League Bylaws.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
