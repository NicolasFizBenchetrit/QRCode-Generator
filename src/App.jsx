import './App.css'
import Input from './components/Input'
import Qr from './components/Qr'
import { Toaster } from 'react-hot-toast'
import useQRCoder from './hooks/useQRcoder'

function App () {
  const { qrcode, generateQRCode } = useQRCoder()
  return (
    <div className='flex flex-col p-3 m-8'>
      <Toaster />
      <h1 className='mb-5 text-center text-2xl font-semibold'>
        QRCode Generator
      </h1>
      <Input generator={generateQRCode} qrCode={qrcode} />
      <Qr qrcode={qrcode} />
    </div>
  )
}

export default App
