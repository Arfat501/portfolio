'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#000000]">
            {/* Simplified animated gradient background - only 2 blobs */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                {/* Small label - removed excessive animations */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="inline-block mb-6 px-4 py-2 border border-purple-500/30 rounded-full text-sm text-purple-400 bg-purple-500/5 backdrop-blur-sm"
                >
                    ✨ AI Automation Specialist
                </motion.div>

                {/* Name - removed floating animation to prevent lag */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Arfat Shaikh
                    </span>
                </h1>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-medium text-white/80 mb-8 tracking-tight"
                >
                    AI Automation Engineer & Agent Builder
                </motion.h2>

                {/* Description - simplified hover effects */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12"
                >
                    Designing AI agents, automation workflows, and intelligent systems using{' '}
                    <span className="text-purple-400 font-medium">n8n</span>,{' '}
                    <span className="text-pink-400 font-medium">LLMs</span>,{' '}
                    <span className="text-purple-400 font-medium">APIs</span>, and{' '}
                    <span className="text-pink-400 font-medium">CRMs</span>.
                </motion.p>

                {/* Stats row - removed individual floating animations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    {[
                        { value: '50+', label: 'Automations Built' },
                        { value: '10+', label: 'AI Agents Deployed' },
                        { value: '100%', label: 'Client Satisfaction' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + (index * 0.1), duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="text-center group cursor-default"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/40 mt-1 group-hover:text-white/60 transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator - kept simple bounce */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-1 h-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
