const Qr = ({ qrcode }) => {
  return (
    <div className='flex flex-col items-center m-8'>
      {qrcode
        ? (
          <>
            <img src={qrcode} width={400} height={400} />
            <a
              href={qrcode}
              download='qrcode.png'
              className='mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
            >
              Download
            </a>
          </>
          )
        : null}
    </div>
  )
}

export default Qr
