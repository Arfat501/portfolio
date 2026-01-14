'use client';

import { motion } from 'framer-motion';

const capabilities = [
    {
        title: 'AI Agents',
        description: 'RAG, Task-based, Conversational',
        icon: '🤖',
    },
    {
        title: 'Workflow Automation',
        description: 'n8n, APIs, Integration',
        icon: '⚡',
    },
    {
        title: 'Voice Agents',
        description: 'AI Calling Systems',
        icon: '🎙️',
    },
    {
        title: 'CRM Automation',
        description: 'Email, Lead Management',
        icon: '📊',
    },
    {
        title: 'Lead Generation',
        description: 'Outreach Automation',
        icon: '🎯',
    },
    {
        title: 'Custom Solutions',
        description: 'Tailored AI Systems',
        icon: '🛠️',
    },
];

export default function WhatIBuild() {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-[#000000]">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            What I Build
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto">
                        Specialized in creating intelligent automation systems that drive real business results
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />

                            {/* Content */}
                            <div className="relative">
                                <div className="text-4xl mb-4">{capability.icon}</div>
                                <h3 className="text-xl font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                                    {capability.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {capability.description}
                                </p>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
