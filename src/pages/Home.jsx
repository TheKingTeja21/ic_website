import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { ArrowRight, Bell, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats, collegeHeads, studentHeads, upcomingEvents } from '../data';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Notifications Side-by-Side */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden px-6 py-12">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[80px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Hero Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-6"
            >
              INNOVATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary text-glow">
                CREATE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-10"
            >
              The official Innovation & Creativity Club. Fostering the next generation of leaders and creators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/events" className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1">
                Explore Events <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/team" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all backdrop-blur-md hover:-translate-y-1">
                Meet the Team
              </Link>
            </motion.div>
          </div>

          {/* Notifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary animate-bounce" /> Happening Now
              </h3>
              <Link to="/events" className="text-sm text-primary hover:underline">View All</Link>
            </div>

            <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {upcomingEvents.map((event, index) => (
                <Link to={`/events/${event.id}`} key={index}>
                  <Card className="flex gap-4 p-4 items-center group cursor-pointer hover:bg-white/5">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{event.type}</span>
                      <h4 className="text-lg font-bold leading-tight mb-1">{event.title}</h4>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <Section className="py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Impact</h2>
          <p className="text-muted-foreground">Making a difference across campus and beyond.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 border-primary/20 bg-black/40">
              <stat.icon className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Club Leadership Showcase (Students) */}
      <Section className="py-20 bg-gradient-to-b from-transparent to-black/80">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Club Leadership</h2>
          <p className="text-muted-foreground">The student visionaries driving our success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentHeads.map((head, index) => (
            <Card key={index} className="p-0 overflow-hidden group border-0 bg-transparent shadow-none">
              <div className="h-80 overflow-hidden relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 opacity-80 md:opacity-0 md:group-hover:opacity-80 transition-opacity duration-500" />
                <img
                  src={head.image}
                  alt={head.name}
                  className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">{head.name}</h3>
                  <p className="text-white/90 font-medium text-sm">{head.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Institutional Leadership Showcase (Faculty) */}
      <Section className="py-20 bg-black/95">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Institutional Leadership</h2>
          <p className="text-muted-foreground">Guided by the best minds in the institution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collegeHeads.map((head, index) => (
            <Card key={index} className="p-0 overflow-hidden group border-0 bg-transparent shadow-none">
              <div className="h-64 overflow-hidden relative rounded-2xl grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500">
                <img
                  src={head.image}
                  alt={head.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur p-4 text-center">
                  <h3 className="text-lg font-bold text-white">{head.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase">{head.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
