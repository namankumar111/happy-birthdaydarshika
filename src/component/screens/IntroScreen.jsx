"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Sparkles } from "lucide-react"

export default function IntroScreen({ onNext }) {
    return (
        <div className="relative min-h-screen overflow-hidden py-10 md:py-14 text-center flex flex-col items-center justify-center px-6">
            
            {/* Elegant Font Import */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;600&family=Quicksand:wght@500;700&display=swap');
                
                .font-main { font-family: 'Plus Jakarta Sans', sans-serif; }
                .font-accent { font-family: 'Quicksand', sans-serif; }
            `}</style>

            {/* 1. Subtle Floating Background Objects */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div 
                    animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-20 left-[10%] w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full"
                />
                <motion.div 
                    animate={{ y: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-20 right-[10%] w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full"
                />
            </div>

            {/* 2. Simple & Sweet Animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ willChange: "transform" }}
            >
                <motion.img
                    src="/gifts/intro.gif" 
                    alt="Cute Greeting"
                    className="w-[140px] md:w-[180px] drop-shadow-xl rounded-2xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <div className="mt-10 space-y-4 max-w-lg">
                {/* Clean & Friendly Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 className="font-accent text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Hey there! ✨
                    </h1>
                    <h2 className="font-main text-2xl md:text-3xl font-light text-pink-200/90 mt-2">
                        Heard it's your <span className="text-pink-400 font-semibold underline decoration-dotted underline-offset-8">Special Day</span>
                    </h2>
                </motion.div>

                {/* Friendly & Simple Message */}
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="font-main text-base md:text-lg text-white/70 leading-relaxed px-4"
                >
                    Sending you warm wishes for a wonderful year ahead. 
                    May your day be filled with joy, laughter, and everything you love! 
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="font-main text-sm text-pink-300/60 uppercase tracking-[0.2em]"
                >
                    I have a small surprise for you...
                </motion.p>
            </div>

            {/* 3. Optimized Button Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="mt-12"
            >
                <GradientButton onClick={() => { onNext?.() }}>
                    <motion.div 
                        className="flex items-center gap-3 px-4 py-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Sparkles size={20} className="text-white" />
                        <span className="font-main font-semibold tracking-wide">Take a look</span>
                    </motion.div>
                </GradientButton>
            </motion.div>

            {/* Soft Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-72 h-72 bg-fuchsia-500/5 blur-[120px] rounded-full" />
        </div>
    )
}
