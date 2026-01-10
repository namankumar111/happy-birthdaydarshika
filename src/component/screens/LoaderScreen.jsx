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
                    setTimeout(() => onDone?.(), 400)
                    return 100
                }
                return p + 2
            })
        }, 60)

        return () => clearInterval(t)
    }, [])

    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="w-[70%] max-w-xl">

                {/* loading bar */}
                <div className="w-full h-[6px] bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>

                {/* text */}
                <motion.p
                    className="mt-6 text-center text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Crafting special moment for Bevkoof Girl 💓
                </motion.p>

            </div>
        </div>
    )
}
