import generatorQRCode from '../helpers/generatorQRCode'
import { useCallback, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

function useQRCoder ({ url }) {
  const [qrcode, setQrcode] = useState('')
  const [loading, setLoading] = useState(false)
  const previousUrl = useRef(url)

  const generateQRCode = useCallback(async ({ urlText }) => {
    if (urlText === previousUrl.current) return
    setLoading(true)
    previousUrl.current = urlText
    const res = await generatorQRCode(urlText)
    if (res === 'error') {
      toast.error('An error has ocurred')
    }
    setLoading(false)
    setQrcode(res)
  }, [])

  return { qrcode, generateQRCode, loading }
}

export default useQRCoder
