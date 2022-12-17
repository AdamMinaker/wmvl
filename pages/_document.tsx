import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='h-full'>
      <Head />
      <body className='h-full dark:bg-[#131516] dark:text-[#d8d4cf]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
