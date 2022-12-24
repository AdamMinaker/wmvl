interface ButtonProps {
  title: string
}

export default function Example({ title }: ButtonProps) {
  return (
    <button
    type='button'
    className='mt-2 mb-8 inline-flex items-center rounded-md border dark:border-[#363b3d] border-gray-300 dark:text-[#d8d4cf] dark:bg-[#1a1d1e] bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50'
  >
    {title}
  </button>
  )
}
