"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"; // Heart icon ke liye

export default function MessageScreen() {
  const [showMessage, setShowMessage] = useState(false)

  // Floating Hearts ke liye variants
  const heartVariants = {
    initial: { y: 0, opacity: 0.5, scale: 0.5 },
    animate: {
      y: -1000,
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="relative px-4 md:px-6 py-10 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Fonts & Custom Scrollbar */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #60a5fa; border-radius: 10px; }
      `}</style>

      {/* --- Floating Hearts Background --- */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={heartVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'absolute',
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`, // Random delay
            zIndex: 0, // Peeche rahega
          }}
        >
          <Heart size={30} className={`text-pink-400/${Math.floor(Math.random() * (40 - 10) + 10)}`} fill="currentColor" />
        </motion.div>
      ))}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 text-4xl md:text-5xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] text-center"
      >
        {showMessage ? "Your Special Note! 💖" : "A Surprise for Madam! 🎁"}
      </motion.h2>

      <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full max-w-md">
        {/* --- BLUE GIFT BOX (Static, click-trigger only) --- */}
        <motion.div 
          onClick={() => setShowMessage(!showMessage)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`relative cursor-pointer transition-all duration-500 ${showMessage ? "z-10 opacity-30 scale-90 blur-sm" : "z-30 opacity-100"}`}
        >
            <span className="text-6xl mb-2">{showMessage ? "✉️" : "🎁"}</span>
            <p className="text-white/80 font-quicksand text-xs tracking-widest font-bold">
               {showMessage ? "CLICK TO HIDE" : "CLICK TO OPEN"}
            </p>
            {!showMessage && (
                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-10 text-white text-sm px-3 py-1 bg-blue-500 rounded-full"
                 >
                     Tap Me!
                 </motion.div>
            )}
        </motion.div>

        {/* --- MESSAGE NOTE (SLIDING FROM SIDE) --- */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }} // Right se aayega
              animate={{ x: 0, opacity: 1 }}     // Center mein aayega
              exit={{ x: "100%", opacity: 0 }}   // Right mein wapas chala jayega
              transition={{ type: "spring", stiffness: 80, damping: 12, duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-2xl p-6 border-8 border-blue-100 flex flex-col z-40"
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
                  "Bss Itni Hi Kahunga, It Feels really Good Talking To You. Always keep smiling... kyunki haste hue tum ek number ki bevkoof ladki lagti ho jisse dekh kar mujhe hasi aati hai! 😂 Choti-choti baat par gussa hona, aur har cheez delete karwane ki tumhari ye gandi aadat... please sudhar lo!"
                </p>

                <p className="mb-4 font-medium text-gray-600">
                  Anyway, please don't take it to heart or feel bad. It's your birthday, so I'm just pulling your leg like always! Although... I must admit, some of these things are actually true, but let's just keep that a secret for today! 😉
                </p>

                <p className="mb-4">
                  Enjoy your special day to the fullest with your family and friends. 🥳 Stay blessed and keep being your crazy self!
                </p>

                <p className="text-center font-pacifico text-blue-500 mt-4 border-t pt-4 text-xl">
                  Happy Birthday Once Again! 🎈✨
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Floating Stars & Dust */}
      <div className="absolute top-1/4 left-10 animate-pulse text-blue-400/20 text-4xl blur-sm">⭐</div>
      <div className="absolute bottom-1/4 right-10 animate-bounce text-cyan-400/20 text-4xl blur-sm">✨</div>
      <div className="absolute top-[60%] left-[80%] animate-spin text-indigo-400/20 text-3xl blur-xs">💫</div>

      <motion.p 
        animate={{ opacity: showMessage ? 1 : 0.4 }}
        className="mt-12 text-blue-200/40 font-quicksand text-[10px] uppercase tracking-[0.4em] text-center"
      >
        {showMessage ? "Scroll to read full message" : "Tap the gift to reveal the message"}
      </motion.p>
    </div>
  )
          }
