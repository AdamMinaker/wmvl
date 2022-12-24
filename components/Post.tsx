import { Prisma } from '.prisma/client'

interface Props {
  post: Prisma.PostsSelect
  refreshData: () => void
}

export default function Home({ post, refreshData }: Props) {
  const deletePost = async () => {
    try {
      await fetch(`/api/posts/${post.id}`, {
        method: 'DELETE',
      })
      refreshData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='border-b border-gray-200 pb-5 dark:border-[#363b3d]'>
        <h3 className='text-lg font-medium leading-6 text-gray-900 dark:text-[#d8d4cf]'>{post.title}</h3>
      </div>

      <p className='my-3'>{post.content}</p>

      <p className='max-w-4xl text-sm text-gray-500'>Attachments:</p>
      <p className='mt-2 max-w-4xl text-sm text-gray-500'>Date: {post.updatedAt}</p>
      <p className='mt-2 max-w-4xl text-sm text-gray-500'>Posted by: Admin</p>
     
      <button
       onClick={deletePost}
        className='mt-2 mb-8 inline-flex items-center rounded-md border dark:hover:bg-gray-700 dark:border-[#363b3d] border-gray-300 dark:text-[#d8d4cf] dark:bg-[#1a1d1e] bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50'
      >
        Delete
      </button>
    </>
  )
}
