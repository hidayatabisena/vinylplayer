import React from 'react'
import VinylPlayer from './VinylPlayer'
import Lyrics from './Lyrics'
import Background from './Background'

export default function Layout() {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Background />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        zIndex: 1
      }}>
        <div style={{
          width: '40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <VinylPlayer />
        </div>
        <div style={{
          width: '60%',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <Lyrics />
        </div>
      </div>
    </div>
  )
}
