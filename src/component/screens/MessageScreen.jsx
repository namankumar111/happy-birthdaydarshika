"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, RotateCcw } from "lucide-react";

export default function MessageScreen() {
  const [showMessage, setShowMessage] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className="relative px-4 md:px-6 py-10 flex flex-col items-center justify-center min-h-[95vh] overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #60a5fa; border-radius: 10px; }
      `}</style>

      {/* --- Background Effects (Hearts) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Heart size={Math.random() * 20 + 10} className="text-pink-400/20" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.h2 className="relative z-50 text-4xl md:text-5xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-8 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] text-center">
        {showMessage ? "Your Special Note! 💖" : "A Surprise for Madam! 🎁"}
      </motion.h2>

      <div className="relative flex flex-col items-center justify-center w-full max-w-md h-[550px]">
        
        {/* --- BLUE BOX (Peeche chala jayega) --- */}
        <motion.div 
          onClick={() => setShowMessage(true)}
          animate={{ 
            scale: showMessage ? 0.8 : 1, 
            opacity: showMessage ? 0.2 : 1,
            y: showMessage ? 180 : 0 
          }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 cursor-pointer w-72 h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-b-xl shadow-2xl flex flex-col items-center justify-center border-t-4 border-blue-400 ${showMessage ? 'pointer-events-none' : ''}`}
        >
            <span className="text-6xl mb-2">🎁</span>
            <p className="text-white/80 font-quicksand text-xs font-bold tracking-widest uppercase">Tap to reveal</p>
        </motion.div>

        {/* --- MESSAGE NOTE (FRONT PE) --- */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: -60 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute z-50 w-[95%] md:w-[420px] h-[520px] bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] p-6 border-8 border-blue-100 flex flex-col"
            >
              <div 
                onScroll={(e) => {
                    const bottom = Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - e.currentTarget.clientHeight) < 1;
                    if (bottom) setShowFeedback(true);
                }}
                className="flex-1 overflow-y-auto font-quicksand text-[#1e293b] leading-relaxed pr-2 custom-scrollbar text-sm md:text-base"
              >
                <h4 className="font-pacifico text-2xl text-blue-600 mb-4 text-center border-b pb-2">Happy Birthday, Madam! 🎂</h4>
                
                <p className="mb-4">
                  I still clearly remember seeing you for the first time—dancing at the Freshers party. I really liked it and even gave you a compliment, but <b>'aap kahan kisi par dhyaan deti ho Madam!'</b> 😅 Full attitude, huh?
                </p>

                <p className="mb-4">
                  Then we finally talked during the Nukkad Natak practice days. And then came <i>that</i> one moment after which I couldn't stop laughing every time I saw you 😄 (I’m sure you remember!). 
                </p>

                <p className="mb-4">
                  Slowly, we started talking, though I was always a bit scared of you... darr lagta tha ki kahin aap gussa na ho jao 😅. But honestly, those Nukkad Natak days with all our friends were the best! I’ve actually learned a lot from you in such a short time, Madam Ji. 😊
                </p>

                <p className="mb-4">
                  I also remember my event day—after my dance, I got your message and made that silly joke. You got so angry! 😅 I had to say sorry, but hey, that was the day our real conversation started.
                </p>

                <p className="mb-4">
                  Bss itna hi kahunga, it feels really good talking to you. Always keep smiling...
                </p>

                {/* Highlighted Bezatti Part */}
                <p className="mb-4 text-blue-700 font-semibold italic bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  "Kyunki haste hue tum ek number ki bevkoof ladki lagti ho jisse dekh kar mujhe hasi aati hai! 😂 Choti-choti baat par gussa hona, aur har cheez delete karwane ki tumhari ye gandi aadat... please sudhar lo!"
                </p>

                <p className="mb-4 font-medium text-gray-600">
                  Anyway, please don't take it to heart or feel bad. It's your birthday, so I'm just pulling your leg like always! Although... I must admit, some of these things are actually true, but let's just keep that a secret for today! 😉
                </p>

                <p className="mb-4">
                  Enjoy your special day to the fullest with your family and friends. 🥳 Stay blessed and keep being your crazy self!
                </p>

                <p className="text-center font-pacifico text-blue-500 mt-4 border-t pt-4 text-xl">
                  Happy Birthday Again! 🎈✨
                </p>

                {/* --- FEEDBACK SECTION --- */}
                {showFeedback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 pt-6 border-t-2 border-dashed border-blue-200 text-center"
                  >
                    <img src="/gifts/last_gif.gif" alt="Cute surprise gif" className="w-32 mx-auto mb-4 rounded-lg shadow-md" />
                    <p className="font-pacifico text-xl text-blue-600 mb-6">Did you like the surprise? ✨</p>
                    
                    <button 
                      onClick={() => window.location.reload()}
                      className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 italic tracking-wider">
                        <RotateCcw size={18} className="group-hover:rotate-[-180deg] transition-transform duration-500" />
                        Replay the Moment
                      </span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-6 text-blue-200/40 text-[10px] uppercase tracking-[0.4em] text-center">
        {showMessage ? "Scroll to the end for a surprise" : "Tap the gift box to reveal"}
      </p>
    </div>
  )
}
