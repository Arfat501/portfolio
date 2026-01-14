'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'AI Lead Qualification Agent',
        description:
            'End-to-end system that generates leads, qualifies and scores them, sends personalized emails with follow-ups, stores data in Supabase, and syncs with CRM using n8n.',
        tags: ['AI', 'n8n', 'Supabase', 'CRM'],
        gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
        title: 'WhatsApp & Instagram Automation',
        description:
            'Automated inbound DMs, auto-replies, lead capture, follow-ups, and CRM updates using WhatsApp APIs, Instagram APIs, and n8n.',
        tags: ['WhatsApp', 'Instagram', 'APIs', 'n8n'],
        gradient: 'from-pink-500/10 to-purple-500/10',
    },
    {
        title: 'AI-Powered Recommendation System',
        description:
            'Guided form + chat interface that collects business context, recommends personalized AI agents using GPT-4, and triggers workflows via n8n and Supabase.',
        tags: ['GPT-4', 'n8n', 'Supabase'],
        gradient: 'from-purple-500/10 to-blue-500/10',
    },
    {
        title: 'RAG-Based AI Chatbot',
        description:
            'Retrieval-Augmented Generation chatbot connected to custom knowledge bases for instant support and FAQs.',
        tags: ['RAG', 'AI', 'Chatbot'],
        gradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
        title: 'Outbound AI Calling Agent',
        description:
            'AI voice agent for outbound calls that qualifies leads, captures intent, and syncs data with CRM systems.',
        tags: ['Voice AI', 'Real Estate', 'CRM'],
        gradient: 'from-purple-500/10 to-pink-500/10',
    },
];

export default function FeaturedProjects() {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-[#000000]">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[150px]" />
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
                            Selected Projects
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto">
                        Real-world AI automation solutions delivering measurable business impact
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative h-full"
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-purple-500/40 transition-all duration-300 flex flex-col">
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative flex-1 flex flex-col">
                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white/90 mb-4 group-hover:text-white transition-colors leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium text-purple-300/80 border border-purple-500/30 rounded-full bg-purple-500/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
