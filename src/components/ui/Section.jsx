import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={cn("py-20 px-6 relative overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {children}
            </motion.div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl filter animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl filter animate-blob animation-delay-2000" />
            </div>
        </section>
    );
};

export default Section;
