import generatorQRCode from '../helpers/generatorQRCode'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

function useQRCoder () {
  const [qrcode, setQrcode] = useState('')

  const generateQRCode = async (urlText) => {
    setQrcode('')
    const res = await generatorQRCode(urlText)
    if (res === 'error') {
      toast.error('Empty Url')
    }
    setQrcode(res)
  }

  return { qrcode, generateQRCode }
}

export default useQRCoder
