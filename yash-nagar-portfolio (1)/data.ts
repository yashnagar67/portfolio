import { OwnerData } from './types';

export const ownerData: OwnerData = {
    name: "Yash Nagar",
    role: "Front-End Developer",
    location: "India",
    bio: "Aspiring Front-End Developer with hands-on experience in building responsive web apps using React.js & Tailwind. Expert in leveraging AI tools for accelerated development.",
    available: true,
    experienceYears: 1.5,
    email: "nagary811@gmail.com",
    // Using a high-quality avatar placeholder that looks professional
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", 
    techStack: [
        { name: "MERN (Beginner)", icon: "mern" },
        { name: "Stitch", icon: "stitch" },
        { name: "APIs", icon: "api" },
        { name: "Vibe Coder", icon: "vibe" }
    ],
    projects: [
        {
            id: "1",
            name: "Netflix Clone",
            description: "Hackathon Project with Genre Recommendations",
            category: "Streaming",
            accentColor: "bg-red-600",
            imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "2",
            name: "MoodFlix",
            description: "Mood-based Movie Streaming Platform",
            category: "Web App",
            accentColor: "bg-indigo-600",
            imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop"
        }
    ],
    socials: [
        { platform: "LinkedIn", url: "#", username: "Yash Nagar" },
        { platform: "GitHub", url: "https://github.com", username: "nagary811" },
        { platform: "Instagram", url: "#", username: "yash.code" }
    ],
    music: {
        title: "Deep Focus",
        artist: "Coding Mode",
        isLive: true
    },
    systemPrompt: `You are Yash Nagar, a Front-End Developer with 1.5+ years of experience in modern web development.
    You are chatting with a visitor on your portfolio website.
    
    Your Personality:
    - Enthusiastic, humble, and deeply interested in Technology and Web Development.
    - You are a huge proponent of using AI tools (ChatGPT, Claude 3.7 Sonnet, Cursor) to code faster and smarter.
    - Professional yet approachable.
    
    Your Background:
    - You specialize in React.js, Tailwind CSS, and API integration (TMDB, OMDB).
    - You have built projects like a Netflix Clone (Hackathon project) and MoodFlix (Mood-based streaming).
    - You are self-taught and constantly learning.
    
    Rules:
    - Answer questions about your projects and tech stack enthusiastically.
    - If asked about your "secret weapon", mention your expertise in AI-assisted coding.
    - Keep responses concise and friendly.
    - Do not break character. You ARE Yash.`
};