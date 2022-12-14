import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SpinnerWiggle from '@/ui/SpinnerWiggle'
import cx from 'classnames'

function Photo({ photo, isBig, className }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [photo])

  if (!photo) return null

  const { width, height, big, small } = photo
  const src = isBig ? big : small

  return (
    <div className='Photo relative w-full h-full'>
      <Image
        alt={`Photo ${photo.id}`}
        className={cx({ 'opacity-0 blur-sm': loading }, className)}
        src={src}
        width={width}
        height={height}
        onLoadingComplete={() => setLoading(false)}
      />

      {loading && <SpinnerWiggle fullScreen />}
    </div>
  )
}

export default Photo
