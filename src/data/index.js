import { Users, Calendar, Trophy, Zap } from 'lucide-react';

export const stats = [
    { id: 1, label: 'Students Reached', value: '5,000+', icon: Users },
    { id: 2, label: 'Events Hosted', value: '120+', icon: Calendar },
    { id: 3, label: 'Projects Launched', value: '50+', icon: Trophy },
    { id: 4, label: 'Innovation Awards', value: '15', icon: Zap },
];

export const collegeHeads = [
    { id: 1, name: 'Dr. John Doe', role: 'Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Prof. Jane Smith', role: 'Dean of Student Affairs', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Dr. Alan Grant', role: 'Club Advisor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Prof. Sarah Connor', role: 'Innovation Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

export const studentHeads = [
    { id: 1, name: 'Alex Johnson', role: 'Club President', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Samantha Lee', role: 'Vice President', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Michael Chen', role: 'Technical Head', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Priya Patel', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
];

export const eventsData = [
    { id: 1, title: 'Hackathon 2023', date: 'Oct 12, 2023', gen: 'Gen 1', type: 'Competition', image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?auto=format&fit=crop&q=80&w=400', description: 'A 24-hour hackathon challenging students to solve real-world problems.' },
    { id: 2, title: 'AI Workshop', date: 'Nov 05, 2023', gen: 'Gen 1', type: 'Workshop', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400', description: 'Hands-on workshop on the basics of Artificial Intelligence and Machine Learning.' },
    { id: 3, title: 'Startup Pitch', date: 'Feb 15, 2024', gen: 'Gen 2', type: 'Competition', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400', description: 'Budding entrepreneurs pitch their startup ideas to a panel of investors.' },
    { id: 4, title: 'Web Dev Bootcamp', date: 'Mar 20, 2024', gen: 'Gen 2', type: 'Workshop', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400', description: 'Intensive bootcamp covering modern web development technologies.' },
    { id: 5, title: 'Robotics Expo', date: 'Sept 10, 2024', gen: 'Gen 3', type: 'Exhibition', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400', description: 'Showcasing the latest advancements in robotics and automation.' },
    { id: 6, title: 'Cyber Security Talk', date: 'Oct 15, 2024', gen: 'Gen 3', type: 'Seminar', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400', description: 'Expert talk on the importance of cyber security in the digital age.' },
    { id: 7, title: 'Future Tech Summit', date: 'Jan 25, 2025', gen: 'Gen 4', type: 'Conference', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400', description: 'A summit bringing together tech leaders to discuss future trends.' },
    { id: 8, title: 'App Dev Challenge', date: 'Mar 10, 2025', gen: 'Gen 4', type: 'Competition', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400', description: 'Challenge to build the most innovative mobile application.' },
    { id: 9, title: 'Tech Innovation Summit', date: 'March 15, 2026', type: 'Technology', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400', description: 'Annual summit focusing on breakthrough technologies.' },
    { id: 10, title: 'Entrepreneurship Bootcamp', date: 'April 02, 2026', type: 'Workshop', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400', description: 'Learn how to start and scale your own business.' },
    { id: 11, title: 'AI & Future Trends', date: 'April 20, 2026', type: 'Seminar', image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=400', description: 'Deep dive into the future of AI and its impact on society.' },
];

export const upcomingEvents = eventsData.slice(8, 11);

export const teamMembers = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Club President',
        gen: 'Gen 4',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
        bio: 'Visionary leader with a passion for AI and community building. Leading the club to new heights with innovative projects and inclusive events.'
    },
    {
        id: 2,
        name: 'Samantha Lee',
        role: 'Vice President',
        gen: 'Gen 4',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        bio: 'Expert in event management and operational excellence. Ensures every event runs smoothly and engages the audience.'
    },
    {
        id: 3,
        name: 'Michael Chen',
        role: 'Technical Head',
        gen: 'Gen 4',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        bio: 'Full-stack wizard and open source contributor. Mentors junior developers and oversees all technical aspects of club projects.'
    },
    {
        id: 4,
        name: 'Priya Patel',
        role: 'Creative Director',
        gen: 'Gen 3',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
        bio: 'Bringing ideas to life through design and storytelling. Responsible for the club\'s visual identity and creative direction.'
    },
    {
        id: 5,
        name: 'David Kim',
        role: 'Outreach Coordinator',
        gen: 'Gen 3',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
        bio: 'Connecting the club with industry leaders and partners. Manages relationships with sponsors and external organizations.'
    },
    {
        id: 6,
        name: 'Emily Davis',
        role: 'Secretary',
        gen: 'Gen 2',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
        bio: 'Keeping the club organized and running smoothly. Handles documentation, scheduling, and internal communication.'
    },
    {
        id: 7,
        name: 'James Wilson',
        role: 'Alumni Advisor',
        gen: 'Gen 1',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
        bio: 'Founding member guiding the next generation. Provides mentorship and strategic advice based on years of experience.'
    },
];
