import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Mail, Twitter, Award, ExternalLink } from 'lucide-react';
import { teamMembers } from '../data';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const TeamDetails = () => {
    const { id } = useParams();
    const member = teamMembers.find(m => m.id === parseInt(id));

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Member Not Found</h2>
                    <Link to="/team" className="text-primary hover:underline">Back to Team</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <Link to="/team" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Team
                </Link>

                <div className="relative">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
                        {/* Profile Sidebar */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="sticky top-32"
                            >
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-6 relative group">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-[3/4] object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all group">
                                        <div className="p-2 rounded-full bg-black/40 text-white group-hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">LinkedIn</span>
                                        <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-white" />
                                    </a>
                                    <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all group">
                                        <div className="p-2 rounded-full bg-black/40 text-white group-hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">GitHub</span>
                                        <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-white" />
                                    </a>
                                    <a href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all group">
                                        <div className="p-2 rounded-full bg-black/40 text-white group-hover:text-primary transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">Email</span>
                                        <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-white" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-8 lg:col-span-9">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="mb-2">
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{member.gen} Leader</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black font-heading mb-4 text-glow">{member.name}</h1>
                                <p className="text-2xl text-white/80 font-medium mb-8">{member.role}</p>

                                <div className="prose prose-invert prose-lg max-w-none mb-12">
                                    <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">About Me</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {member.bio || "Passionate about technology and community building. Dedicated to driving innovation and fostering a collaborative environment within the club."}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        As {member.role}, I strive to create impactful experiences for our members and bridge the gap between academic learning and industry application.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    <Card className="p-6 border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                        <Award className="w-8 h-8 text-accent mb-4" />
                                        <h4 className="text-xl font-bold mb-2">Key Achievement</h4>
                                        <p className="text-muted-foreground">Led the organization of the largest hackathon in university history with over 500 participants.</p>
                                    </Card>
                                    <Card className="p-6 border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                        <Award className="w-8 h-8 text-secondary mb-4" />
                                        <h4 className="text-xl font-bold mb-2">Technical Skill</h4>
                                        <p className="text-muted-foreground">Specialized in Full Stack Development, Cloud Architecture, and AI Integration.</p>
                                    </Card>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Current Focus</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Artificial Intelligence', 'Web Development', 'Community Building', 'Event Management', 'Public Speaking', 'System Design'].map((tag, i) => (
                                            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-sm transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default TeamDetails;
