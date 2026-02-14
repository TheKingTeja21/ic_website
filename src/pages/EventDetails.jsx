import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User, MapPin, Clock } from 'lucide-react';
import { eventsData } from '../data';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const EventDetails = () => {
    const { id } = useParams();
    const event = eventsData.find(e => e.id === parseInt(id));

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
                    <Link to="/events" className="text-primary hover:underline">Back to Events</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen">
            <Section className="relative">
                <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Events
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-[0_0_50px_rgba(6,182,212,0.15)] border border-white/10"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/20 text-sm font-bold flex items-center gap-2">
                                <Tag className="w-3 h-3" /> {event.type}
                            </span>
                            <span className="px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/20 text-sm font-bold flex items-center gap-2">
                                <User className="w-3 h-3" /> {event.gen}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            {event.title}
                        </h1>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="flex items-center gap-3 text-lg text-muted-foreground">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <Calendar className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Date</p>
                                    <p className="text-white font-medium">{event.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-lg text-muted-foreground">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <Clock className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Time</p>
                                    <p className="text-white font-medium">10:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none mb-10">
                            <h3 className="text-2xl font-bold mb-4">About this Event</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {event.description || "Join us for an exciting event filled with innovation, learning, and networking. This event brings together the brightest minds to solve challenges and create the future."}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-background font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 w-full md:w-auto">
                                Register Now
                            </button>
                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all backdrop-blur-md hover:-translate-y-1 w-full md:w-auto">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default EventDetails;
