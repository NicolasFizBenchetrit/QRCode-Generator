import { useState } from 'react'

const Input = ({ generator, generated }) => {
  const [url, setUrl] = useState('')

  const buttonGenerate = (e) => {
    e.preventDefault()
    generator(url)
  }

  return (
    <form className='flex mx-10 justify-center' onSubmit={buttonGenerate}>
      <div className='w-full max-w-md'>
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='URL'
          label='url'
          onChange={e => setUrl(e.target.value)}
        />
      </div>
      {generated
        ? (
          <button
            type='submit'
            className='ml-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
          >
            Generate ⚡
          </button>
          )
        : (
          <button
            type='button'
            className='ml-2 focus:outline-none text-white bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-not-allowed'
            disabled
          >
            Generating... ⏳
          </button>
          )}
    </form>
  )
}

export default Input
