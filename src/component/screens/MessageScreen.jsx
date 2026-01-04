"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MessageScreen() {
  const [showNote, setShowNote] = useState(false)

  return (
    <div className="px-4 md:px-6 py-10 flex flex-col items-center justify-center min-h-[80vh]">
      {/* Fonts & Custom Scrollbar */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #60a5fa; border-radius: 10px; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-5xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] text-center"
      >
        {showNote ? "Read Carefully! 🧐" : "A Surprise for Madam! 🎁"}
      </motion.h2>

      <div className="relative flex flex-col items-center mt-20">
        {/* --- BLUE BOX / ENVELOPE --- */}
        <motion.div 
          onClick={() => setShowNote(!showNote)}
          animate={{ y: showNote ? 120 : 0 }} // Box niche slide ho jayega jab message khulega
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-30 cursor-pointer w-72 h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-b-xl shadow-2xl flex flex-col items-center justify-center border-t-4 border-blue-400"
        >
            <span className="text-6xl mb-2">{showNote ? "✉️" : "🎁"}</span>
            <p className="text-white/80 font-quicksand text-xs tracking-widest font-bold">
               {showNote ? "CLICK TO HIDE" : "CLICK TO OPEN"}
            </p>
        </motion.div>

        {/* --- MESSAGE NOTE (WHITE PAPER) --- */}
        <AnimatePresence>
          {showNote && (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -340, opacity: 1 }} // Message upar slide hoga
              exit={{ y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute z-10 w-[310px] md:w-[380px] h-[500px] bg-white rounded-xl shadow-2xl p-6 border-x-8 border-t-8 border-blue-100 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto font-quicksand text-[#1e293b] leading-relaxed pr-2 custom-scrollbar text-sm md:text-base">
                <h4 className="font-pacifico text-2xl text-blue-600 mb-4 text-center">Happy Birthday, Madam! 🎂</h4>
                
                <p className="mb-4">
                  I still clearly remember seeing you for the first time—dancing at the Freshers party. I really liked it and even gave you a compliment, but <b>'aap kahan kisi par dhyaan deti ho Madam!'</b> 😅 Full attitude, huh?
                </p>

                <p className="mb-4">
                  Then we finally talked during the Nukkad Natak practice days. And then came <i>that</i> one moment after which I couldn't stop laughing every time I saw you 😄 (I’m sure you remember!). 
                </p>

                <p className="mb-4">
                  Slowly, we started talking, though I was always a bit scared of you... darr lagta tha ki kahin aap gussa na ho jao 😅. But honestly, those Nukkad Natak days were the best! I’ve actually learned a lot from you in such a short time, Madam Ji. 😊
                </p>

                <p className="mb-4">
                  I also remember my event day—after my dance, I got your message and made that silly joke. You got so angry! 😅 I had to say sorry, but hey, that was the day our real conversation started.
                </p>

                {/* Highlighted Bezatti Part */}
                <p className="mb-4 text-blue-700 font-semibold italic bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  "Bas itna hi kahunga, it feels really good talking to you. Always keep smiling... kyunki haste hue tum ek number ki bevkoof ladki lagti ho jisse dekh kar mujhe hasi aati hai! 😂 Choti-choti baat par gussa hona, aur har cheez delete karwane ki tumhari ye gandi aadat... please sudhar lo!"
                </p>

                <p className="mb-4 font-medium text-gray-600">
                  Anyway, please don't take it to heart or feel bad. It's your birthday, so I'm just pulling your leg like always! Although... I must admit, some of these things are actually true, but let's just keep that a secret for today! 😉
                </p>

                <p className="mb-4">
                  Enjoy your special day to the fullest with your family and friends.
                </p>

                <p className="text-center font-pacifico text-blue-500 mt-4 border-t pt-4 text-xl">
                  Happy Birthday Again! 🎈✨ & 🥳 Stay blessed and keep being your crazy self!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 animate-pulse text-blue-400/20 text-4xl">⭐</div>
      <div className="absolute bottom-1/4 right-10 animate-bounce text-cyan-400/20 text-4xl">✨</div>

      <motion.p 
        animate={{ opacity: showNote ? 1 : 0.4 }}
        className="mt-32 text-blue-200/40 font-quicksand text-[10px] uppercase tracking-[0.4em] text-center"
      >
        {showNote ? "Scroll inside the card to read more ❤️" : "Tap the gift to reveal the message"}
      </motion.p>
    </div>
  )
}
