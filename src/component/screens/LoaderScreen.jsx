"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoaderScreen({ onDone }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const t = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(t)
                    setTimeout(() => onDone?.(), 500)
                    return 100
                }
                return p + 4
            })
        }, 120)

        return () => clearInterval(t)
    }, [])

    return (
        <div className="relative w-full h-screen overflow-hidden grid place-items-center bg-black">

            {/* background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/20 to-pink-600/20 blur-3xl animate-pulse" />

            {/* floating blobs */}
            <motion.div
                className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
                animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* loader */}
            <div className="relative grid place-items-center">
                <motion.div
                    className="w-52 h-52 rounded-full border-[6px] border-pink-400/30 border-t-pink-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.35)]"
                    key={progress}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    {progress}%
                </motion.div>
            </div>

            {/* text */}
            <motion.h1
                className="absolute bottom-24 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 text-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity }}
            >
                Crafting your special moment ❤️
            </motion.h1>
        </div>
    )
}
