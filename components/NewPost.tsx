import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'

interface Props {
  refreshData: () => void
}

export default function NewPost( {refreshData}: Props ) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  //const onSubmit = (data: any) => console.log(data);
  const onSubmit = async (data: any) => {
    try {
      const body = { title: data.title, content: data.content }
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      refreshData()
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} action='#' className='mb-5'>
      <div className='overflow-hidden rounded-lg border dark:border-[#363b3d] border-gray-300 shadow-sm'>
        <label htmlFor='title' className='sr-only'>
          Title
        </label>
        <input
          type='text'
          id='title'
          className='dark:bg-[#131516] block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0'
          placeholder='Title'
          {...register('title')}
        />
        <label htmlFor='description' className='sr-only'>
          Description
        </label>
        <textarea
          rows={8}
          id='description'
          className='dark:bg-[#131516] block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm'
          placeholder='Write a description...'
          defaultValue={''}
          {...register('content')}
        />

        {/* Spacer element to match the height of the toolbar */}
      </div>

      <div className='inset-x-px bottom-0'>
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}

        <div className='flex items-center justify-between space-x-3 mt-2'>
          <div className='flex'>
            <button type='button' className='group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400'>
              <PaperClipIcon className='-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500' aria-hidden='true' />
              <span className='text-sm italic text-gray-500 group-hover:text-gray-600'>Attach a file</span>
            </button>
          </div>
          <div className='flex-shrink-0'>
            <button
              type='submit'
              className='inline-flex items-center rounded-md border dark:hover:bg-gray-700 dark:border-[#363b3d] border-gray-300 dark:text-[#d8d4cf] dark:bg-[#1a1d1e] bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50'
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
