import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data';

const generations = ['Gen 4', 'Gen 3', 'Gen 2', 'Gen 1'];

const Team = () => {
    const [activeGen, setActiveGen] = useState('Gen 4');
    const filteredTeam = teamMembers.filter(member => member.gen === activeGen);

    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black font-heading mb-4"
                    >
                        MEET THE <span className="text-primary">TEAM</span>
                    </motion.h1>
                    <p className="text-muted-foreground text-xl">The minds behind the innovation.</p>
                </div>

                {/* Generation Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {generations.map((gen) => (
                        <button
                            key={gen}
                            onClick={() => setActiveGen(gen)}
                            className={cn(
                                "px-6 py-2 rounded-full font-bold transition-all duration-300 border",
                                activeGen === gen
                                    ? "bg-primary text-background border-primary shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                    : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50 hover:text-white"
                            )}
                        >
                            {gen}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTeam.map((member) => (
                            <motion.div
                                key={member.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/team/${member.id}`} className="block group">
                                    <Card className="relative pt-20 mt-10 text-center border-primary/20 bg-gradient-to-b from-white/5 to-black/40 hover:bg-white/10 transition-colors">
                                        {/* Floating Image Effect */}
                                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-secondary shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>

                                        <div className="pb-6 px-4">
                                            <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{member.name}</h3>
                                            <p className="text-primary/80 font-medium mb-3 uppercase tracking-wider text-xs">{member.role}</p>
                                            <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto line-clamp-2">{member.bio}</p>

                                            <div className="flex justify-center gap-3 relative z-20">
                                                <motion.button whileHover={{ y: -3 }} className="p-2 bg-white/5 text-white rounded-full border border-white/10 hover:bg-primary hover:border-primary transition-all">
                                                    <Linkedin className="w-4 h-4" />
                                                </motion.button>
                                                <motion.button whileHover={{ y: -3 }} className="p-2 bg-white/5 text-white rounded-full border border-white/10 hover:bg-primary hover:border-primary transition-all">
                                                    <Github className="w-4 h-4" />
                                                </motion.button>
                                                <motion.button whileHover={{ y: -3 }} className="p-2 bg-white/5 text-white rounded-full border border-white/10 hover:bg-primary hover:border-primary transition-all">
                                                    <Mail className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredTeam.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No team members found for {activeGen}.
                    </div>
                )}

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold mb-6">Want to join the core team?</h2>
                    <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Apply for Next Gen
                    </button>
                </div>
            </Section>
        </div>
    );
};

export default Team;
