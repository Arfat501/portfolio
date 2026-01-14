'use client';

import { motion } from 'framer-motion';

const toolCategories = [
    {
        title: 'AI & Intelligence',
        tools: ['OpenAI', 'Claude', 'Google Gemini'],
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Automation & Data',
        tools: ['n8n', 'APIs', 'Apify', 'Airtable', 'Supabase'],
        gradient: 'from-pink-500/20 to-purple-500/20',
    },
    {
        title: 'Sales & CRM',
        tools: ['Apollo', 'HubSpot', 'GoHighLevel'],
        gradient: 'from-purple-500/20 to-blue-500/20',
    },
    {
        title: 'Channels & Experience',
        tools: ['WhatsApp', 'ElevenLabs', 'Lovable', 'Retell AI'],
        gradient: 'from-blue-500/20 to-purple-500/20',
    },
];

export default function ToolsEcosystem() {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-[#000000]">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]" />
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
                            Tools & Ecosystem
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto">
                        Leveraging cutting-edge platforms to build powerful automation solutions
                    </p>
                </motion.div>

                {/* Tool Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {toolCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-purple-500/30 transition-all duration-300"
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="relative">
                                {/* Category Title */}
                                <h3 className="text-xl font-bold text-white/90 mb-6 uppercase tracking-wider flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                                    {category.title}
                                </h3>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-3">
                                    {category.tools.map((tool, toolIndex) => (
                                        <motion.span
                                            key={toolIndex}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-5 py-2.5 text-sm font-medium text-white/70 border border-white/20 rounded-full bg-white/[0.03] hover:border-purple-400/50 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-default backdrop-blur-sm"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
