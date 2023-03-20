import './App.css'
import Input from './components/Input'
import QRCode from 'qrcode'
import { useState } from 'react'
import Qr from './components/Qr'
import { toast, Toaster } from 'react-hot-toast'

function App () {
  const [qrcode, setQrcode] = useState('')
  const [generated, setGenerated] = useState(true)

  const generateQRCode = (urlText) => {
    setGenerated(false)
    const opts = {
      errorCorrectionLevel: 'H',
      scale: 14,
      type: 'image/png',
      margin: 1
    }
    QRCode.toDataURL(urlText, opts, (err, url) => {
      if (err) {
        toast.error('Url is empty')
      }
      setQrcode(url)
      setGenerated(true)
    })
  }

  return (
    <div className='flex flex-col p-3 m-8'>
      <Toaster />
      <h1 className='mb-5 text-center text-2xl font-semibold'>
        QRCode Generator
      </h1>
      <Input generator={generateQRCode} generated={generated} />
      <Qr qrcode={qrcode} />
    </div>
  )
}

export default App
