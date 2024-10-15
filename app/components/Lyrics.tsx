import React from 'react'
import SecondLyrics from './SecondLyrics'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Lyrics() {
  return (
    <div className={poppins.className} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      height: '100%',
      color: 'white', 
    }}>
      <div>
        <h2 style={{ fontWeight: 700 }}>verse 1 & 2</h2>
        <p>
          If a picture paints a thousand words,<br />
          Then why can&apos;t I paint you?<br />
          The words will never show,<br />
          The you I&apos;ve come to know.
        </p>
        <br />
        <p>
          If a face could launch a thousand ships,<br />
          Then where am I to go?<br />
          There&apos;s no one home but you,<br />
          You&apos;re all that&apos;s left me too.
        </p>
        <br />
        <p>
          And when my love for life is running dry,<br />
          You come and pour yourself on me.<br />
        </p>
      </div>
      <SecondLyrics />
    </div>
  )
}
