import QRCode from 'qrcode'

async function generatorQRCode (urlText) {
  let res = 'error'
  const opts = {
    errorCorrectionLevel: 'H',
    scale: 14,
    type: 'image/png',
    margin: 1
  }
  QRCode.toDataURL(urlText, opts, (err, url) => {
    if (err) return
    res = url
  })
  return res
}

export default generatorQRCode
