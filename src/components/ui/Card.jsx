import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = ({ children, className, noHover = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={!noHover ? {
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.3)"
            } : {}}
            className={cn(
                "glass p-6 rounded-2xl border border-white/10 transition-all duration-500",
                "bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default Card;
