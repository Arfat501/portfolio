'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="relative py-32 md:py-48 px-6 bg-[#000000]">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Let's Build Something
                        </span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        Ready to transform your business with AI automation? Let's discuss your project.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    {/* Email Card */}
                    <a
                        href="mailto:arfat8025@gmail.com"
                        className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                        <div className="relative">
                            <div className="text-3xl mb-3">📧</div>
                            <div className="text-sm text-white/40 mb-2 uppercase tracking-wider">Email</div>
                            <div className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                arfat8025@gmail.com
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/in/arfat-shaikh-2454312aa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                        <div className="relative">
                            <div className="text-3xl mb-3">💼</div>
                            <div className="text-sm text-white/40 mb-2 uppercase tracking-wider">LinkedIn</div>
                            <div className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                Connect on LinkedIn
                            </div>
                        </div>
                    </a>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="https://cal.com/arfat-shaikh-dn9ojj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                        <div className="relative px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300">
                            Book a Call
                        </div>
                    </a>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-24 pt-12 border-t border-white/10"
                >
                    <p className="text-sm text-white/30">
                        © 2026 Arfat Shaikh. Crafted with Next.js, Framer Motion & AI.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
