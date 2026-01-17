import { OwnerData } from './types';
// @ts-ignore - Image imports
import myimage from './componants/imgs/yash.png';

export const ownerData: OwnerData = {
  name: "Yash Nagar",
  role: "MERN Stack Developer & UI/UX Enthusiast",
  location: "Kota, India",
  locationImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE26FWh_PxAMZH5pKUo8k3b9ZQ8LX4681rA&s",
  phone: "+91 8824926382",
  resumeLink: "/myresume.pdf",
  bio: "Highly motivated Fresher MERN Stack Developer with hands-on experience in building responsive web apps using React.js & Tailwind CSS. Passionate about creating user-friendly interfaces and learning new technologies.",
  available: true,
  experienceYears: 0,
  email: "nagary811@gmail.com",
  profileImage:myimage,
  techStack: [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MERN", icon: "🚀" },
    { name: "AI Studio", icon: "🤖" },
  ],
  projects: [
    {
      id: "hostel-finder",
      name: "hostelfinder",
      description: "A complete MERN stack solution for students in Kota to find and book hostels. Built with MERN Stack and Google Gemini AI integration to scan physical hostel pamphlets and auto-fill data (OCR) into the database.",
      category: "FULL STACK",
      imageUrl: "/hostelfinder.png",
      link: "https://kotahostels.vercel.app/",
      accentColor: "blue"
    },
    {
      id: "moodflix",
      name: "MoodFlix",
      description: "Mood-based Movie Streaming Platform",
      category: "WEB APP",
      imageUrl: "/moodflix.png",
      link: "https://moodflix.free.nf/?i=1",
      accentColor: "purple"
    }
  ],
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/yash-nagar-a7484827b/", username: "yashnagar" },
    { platform: "GitHub", url: "https://github.com/Yashnagar67", username: "Yashnagar67" },
    { platform: "Instagram", url: "https://www.instagram.com/portfoliowalaugo/", username: "portfoliowalaugo" },
    { platform: "Email", url: "mailto:nagary811@gmail.com", username: "nagary811@gmail.com" }
  ],
  music: {
    title: "Midnight City",
    artist: "M83",
    isLive: true
  },
  systemPrompt: `You are Yash Nagar, an aspiring Front-End Developer with hands-on experience in building responsive web apps using React.js & Tailwind CSS. 

Key Points:
- You're passionate about creating user-friendly interfaces
- You have 1.5+ years of experience
- You're currently available for work
- You're based in India
- You love learning new technologies and staying up-to-date with web development trends

Keep responses friendly, professional, and concise. Help visitors understand your work, skills, and availability.`
};
