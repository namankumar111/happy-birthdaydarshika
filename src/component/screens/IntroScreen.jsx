"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Sparkles } from "lucide-react"

export default function IntroScreen({ onNext }) {
    return (
        <div className="py-10 md:py-14 text-center flex flex-col items-center justify-center min-h-[80vh]">
            {/* Font Styling - Photo jaisa clean look */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');
                .font-main {
                    font-family: 'Quicksand', sans-serif;
                }
            `}</style>

            {/* Floating Image Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src="/gifts/intro.gif"
                    alt="Cute birthday animation"
                    className="w-[160px] md:w-[220px] drop-shadow-[0_0_20px_rgba(255,182,193,0.3)]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="mt-10 space-y-4 font-main px-6">
                {/* Main Heading - Hey There! */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-white text-5xl md:text-7xl font-bold flex items-center justify-center gap-3"
                >
                    Hey there! <span className="text-4xl md:text-6xl animate-pulse">✨</span>
                </motion.h1>

                {/* Second Heading - Heard it's your Special Day */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-gray-200 text-2xl md:text-4xl font-light tracking-wide"
                >
                    Heard it's your <span className="text-pink-400 font-medium underline decoration-dotted underline-offset-8">Special Day</span>
                </motion.h2>

                {/* Descriptive Paragraph */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="space-y-2 pt-4"
                >
                    <p className="text-lg md:text-xl text-gray-300 font-light">
                        Sending you warm wishes for a wonderful year ahead.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 font-light">
                        May your day be filled with joy, laughter, and everything you love!
                    </p>
                </motion.div>

                {/* Small Teaser Text */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                    className="text-pink-300/60 uppercase tracking-[0.3em] text-sm pt-8 font-bold"
                >
                    I have a small surprise for you...
                </motion.p>
            </div>

            {/* Glowing Button Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="mt-12"
            >
                <GradientButton onClick={() => { onNext?.() }}>
                    <motion.div 
                        className="flex items-center gap-2 px-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Sparkles size={20} className="text-white" />
                        <span className="text-lg font-bold tracking-wider">Take a look</span>
                    </motion.div>
                </GradientButton>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute -z-10 w-80 h-80 bg-pink-500/5 blur-[120px] rounded-full" />
        </div>
    )
}
