"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Gift } from "lucide-react"

export default function IntroScreen({ onNext }) {
    return (
        <div className="py-10 md:py-14 text-center flex flex-col items-center justify-center">
            {/* Handwriting Font Import */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
                .font-handwriting {
                    font-family: 'Caveat', cursive;
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
                    className="w-[160px] md:w-[220px] drop-shadow-[0_0_15px_rgba(255,182,193,0.5)]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="mt-8 space-y-2">
                {/* Main Heading with Handwriting Font */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-handwriting text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400"
                >
                    A Girl was born today,
                </motion.h1>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="font-handwriting text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400"
                >
                    Few years ago!
                </motion.h1>

                {/* Subtext */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-lg md:text-xl text-pink-200/80 tracking-wide font-light mt-4"
                >
                    Yes, it’s <span className="text-pink-400 font-semibold underline decoration-wavy underline-offset-4">YOU</span>! A little surprise awaits...
                </motion.p>
            </div>

            {/* Button Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="mt-12"
            >
                <GradientButton onClick={() => { onNext?.() }}>
                    <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Gift size={22} className="animate-bounce" />
                        <span className="text-lg">Start the surprise</span>
                    </motion.div>
                </GradientButton>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -z-10 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
        </div>
    )
}
