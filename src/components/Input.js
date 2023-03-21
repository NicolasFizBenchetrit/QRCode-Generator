import { useState } from 'react'
import GenerateButton from './GenerateButton'

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
      <GenerateButton generated={generated} />
    </form>
  )
}

export default Input
