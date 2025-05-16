import { useState } from 'react'
import Header from './components/Header'
import MainBody from './components/MainBody'
import ImageGallery from './components/ImageGallery'
import Messages from './components/Messages'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div 
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage: 'url("/background-img.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="relative z-10 w-full">
          <Header />
          <MainBody />
          <div className="mt-8">
            <ImageGallery />
          </div>
          <div>
            <Messages />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
