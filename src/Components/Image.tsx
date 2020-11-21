import React from 'react'
import { URL } from '../const'
import NoPhoto from '../Pictures/no_photo_avaliable.png'

const Image: React.FC<{ source: string; alt: string }> = ({ source, alt }) => {
  const src = source ? URL + source : NoPhoto
  return <img src={src} alt={alt} />
}

export default Image
