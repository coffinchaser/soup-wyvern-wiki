import Image from 'next/image'
import React from 'react'

const Logo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 'semibold',
      cursor: 'pointer',
    }}
  >
    <Image 
      src="/waywy.svg" 
      alt="WyvernWiki"
      width={40}
      height={40}
    />
    <span>WyvernWiki</span>
  </div>
)

export default Logo