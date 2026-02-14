import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { eventsData } from '../data';

const Events = () => {
    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black font-heading mb-4"
                    >
                        EVENTS <span className="text-primary">ARCHIVE</span>
                    </motion.h1>
                    <p className="text-muted-foreground">Exploring our legacy through the generations.</p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map((event) => (
                        <Link to={`/events/${event.id}`} key={event.id} className="block group h-full">
                            <Card className="h-full flex flex-col p-0 overflow-hidden border-transparent hover:border-primary/20 transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/10">
                                        <Tag className="w-3 h-3" /> {event.type}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-xs font-bold text-primary mb-2 flex items-center gap-2">
                                        <User className="w-3 h-3" /> {event.gen}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                                    <div className="mt-auto flex items-center gap-2 text-muted-foreground text-sm">
                                        <Calendar className="w-4 h-4" /> {event.date}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Events;
