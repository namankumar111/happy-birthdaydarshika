"use client"

// 1. useRef ko yahan import kiya
import { useState, useRef } from "react" 
import MusicPlayer from "@/component/MusicPlayer"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/component/screens/LoaderScreen"
import IntroScreen from "@/component/screens/IntroScreen"
import CakeScreen from "@/component/screens/CakeScreen"
import PhotosScreen from "@/component/screens/PhotosScreen"
import MessageScreen from "@/component/screens/MessageScreen"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  // Audio control ke liye ref
  const musicRef = useRef(null);
  
  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
  ]

  return (
    <main className="min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative">
      
      {/* 2. Music Player Component yahan add kiya */}
      <div className="fixed bottom-6 left-6 z-50">
        <MusicPlayer ref={musicRef} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className={`w-full ${currentScreen === 4 ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"}`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
        @namankumar
      </motion.div>
    </main>
  )
}
