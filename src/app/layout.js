import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel App',
  description: 'This is a react porject for travel app devoleped by Ahmed Faisal ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=' relative overflow-hidden'>
        {children}
        </div>
        <Footer />
        
      </body>
    </html>
  )
}
