'use client';

import { useState, useEffect, useRef } from 'react'
import { Howl, Howler } from 'howler'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const soundRef = useRef<Howl | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [coverAnimationComplete, setCoverAnimationComplete] = useState(false);
  const [vinylVisible, setVinylVisible] = useState(false);

  useEffect(() => {
    Howler.autoUnlock = false;
    
    soundRef.current = new Howl({
      src: ['/audio/if.mp3'],
      onend: () => setIsPlaying(false),
      onload: () => {
        setIsLoaded(true);
        setIsVisible(true);
      },
      onloaderror: (id, error) => console.error('Error loading audio:', error)
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [])

  useEffect(() => {
    if (coverAnimationComplete) {
      const timer = setTimeout(() => setVinylVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [coverAnimationComplete]);

  const togglePlay = () => {
    if (soundRef.current && isLoaded) {
      if (isPlaying) {
        soundRef.current.pause()
      } else {
        soundRef.current.play()
      }
      setIsPlaying(!isPlaying) 
    }
  }

  const handleCoverClick = () => {
    setVinylVisible(true); 
    togglePlay(); 
  }

  return (
    <div 
      ref={playerRef} 
      style={{ 
        width: '300px', 
        height: '400px', 
        cursor: isLoaded ? 'pointer' : 'default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Image
          src="/vinyl.svg"
          alt="Vinyl Record"
          width={290}
          height={290}
          className={`vinyl ${vinylVisible ? 'visible' : ''} ${isPlaying ? 'spinning' : ''}`}
          style={{
            position: 'absolute',
            left: '15px',
            top: '15px',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: vinylVisible ? 1 : 0,
            transform: vinylVisible ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
        <Image
          src="/cover.svg"
          alt="Album Cover"
          width={320}  
          height={320} 
          onClick={handleCoverClick} 
          style={{
            position: 'absolute',
            top: '-4px',    
            left: '-160px', 
            zIndex: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' 
          }}
        />
      </div>
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '-10%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '18px',
          zIndex: 3
        }}>
          Load audio...
        </div>
      )}
      <div className={poppins.className} style={{
        textAlign: 'center',
        color: 'white',
        marginTop: '10px', 
        fontSize: '16px' 
      }}>
        Built with Cursor<br />
        and Cursor-Small AI
      </div>
      <style jsx global>{`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .vinyl {
              opacity: 0;
              transform: translateX(-100%);
            }
            .vinyl.visible {
              opacity: 1;
              transform: translateX(0);
            }
            .vinyl.spinning {
              animation: spin 8s linear infinite;
            }
      `}</style>
    </div>
  )
}
