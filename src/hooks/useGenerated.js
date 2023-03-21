import { useState, useEffect } from 'react'

function useGenerated (qrCode) {
  const [generated, setGenerated] = useState(true)
  useEffect(() => {
    if (qrCode || (qrCode === 'error')) {
      setGenerated(true)
    }
  }, [qrCode])

  return { generated, setGenerated }
}

export default useGenerated
