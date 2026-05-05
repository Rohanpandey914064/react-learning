import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <div style={{ display: 'flex',alignItems: 'center',justifyContent:'center'}}>
            <div style={{display: 'flex', gap: '10px', border:'2px solid black', padding:'10px', width:'200px',borderRadius:'10px'}}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/cricket'>cricket</Link>
                <Link href='/Ipl'>Ipl</Link>
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
