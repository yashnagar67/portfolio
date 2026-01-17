import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, X, Send, ExternalLink, Phone, Code, Database, Workflow, Wrench, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import { ownerData } from './data';
import { BentoGrid } from './components/BentoGrid';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init',
      role: 'assistant',
      text: "Hi there! 👋 I'm Yash's AI assistant. Ask me anything about my work, experience, or what I'm up to lately!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [copiedCode, setCopiedCode] = useState(null);

  // Initialize theme from system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update root class on theme change
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://hostel-finder-backend-viny.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: currentInput,
          history: messages
        })
      });

      const data = await response.json();

      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: data.answer || "I'm here to help! Feel free to ask me anything.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: "Sorry, I'm having trouble connecting. Please try again later or email me at nagary811@gmail.com",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const expertise = [
    {
      category: 'Frontend Dev',
      skills: ['React.js', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS'],
      icon: <Code className="w-10 h-10" />
    },
    {
      category: 'Backend Dev',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      icon: <Database className="w-10 h-10" />
    },
    {
      category: 'Tools & Skills',
      skills: ['Git & GitHub', 'Cursor AI', 'VS Code', 'Vercel'],
      icon: <Wrench className="w-10 h-10" />
    },
    {
      category: 'Workflow',
      skills: ['Agile Development', 'Responsive Design', 'Problem Solving', 'Collaboration'],
      icon: <Workflow className="w-10 h-10" />
    }
  ];

  const projects = [
    {
      title: "hostelfinder",
      description: "A complete MERN stack solution for students in Kota to find and book hostels. Features search, filtering, and detailed hostel profiles. Built a real-world solution using MERN Stack with Google Gemini AI integration to scan physical hostel pamphlets and auto-fill data (OCR) into the database.",
      tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Gemini AI", "OCR"],
      link: "https://kotahostels.vercel.app/",
      featured: true
    },
    {
      title: "MoodFlix",
      description: "Mood-based Movie Streaming Platform developed during a hackathon. Recommends content based on user sentiment filtering.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Movie API"],
      link: "https://moodflix.free.nf/?i=1",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-500 font-inter">

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-white/70 dark:bg-background-dark/70 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 shadow-sm"
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-white dark:via-blue-400 dark:to-gray-400 bg-clip-text text-transparent"
          >
            Yash Nagar
          </motion.h1>
          <nav className="hidden md:flex gap-6 items-center">
            {['Expertise', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors font-semibold text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero: Bento Dashboard */}
      <main className="w-full py-8 md:py-16 relative z-10">
        <BentoGrid
          data={ownerData}
          onChatOpen={() => setChatOpen(true)}
        />
      </main>

      {/* Restoring Detailed Sections */}
      <div className="w-full max-w-6xl mx-auto px-6 space-y-24 pb-24">

        {/* Expertise Section */}
        <section id="expertise" className="pt-12 scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Detailed Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all group overflow-hidden"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map((skill) => (
                    <li key={skill} className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-3 font-medium break-words">
                      <span className="w-2 h-2 bg-primary dark:bg-blue-500 rounded-full shadow-[0_0_8px_rgba(19,91,236,0.5)] shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
          >
            About & Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Development Workflow</h3>
              <div className="grid gap-4">
                {[
                  { title: "🤖 AI-Powered Coding", desc: "Using Cursor & Gemini AI Studio for rapid prototyping and smart debugging." },
                  { title: "🎨 UI Engineering", desc: "Building polished components with React and modern CSS architecture." },
                  { title: "📚 Continuous Learning", desc: "MERN Stack depth through Sigma Web Dev (120+ Modules, Batch 2024)." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Education Details</h3>
              <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 h-full">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">BCA Graduate</h4>
                <p className="text-primary font-bold mb-1">Maa Bharti PG, Kota</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium text-sm">2023 - Present | 5th Semester</p>
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wider">Coursework Focus:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Dev', 'MERN Stack', 'System Design'].map((course) => (
                      <span key={course} className="px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-full text-xs font-bold">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Deep Dive into Projects
          </motion.h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all shadow-xl"
              >
                {project.featured && (
                  <div className="inline-block px-4 py-1.5 bg-accent-orange text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-accent-orange/30">
                    Featured Work
                  </div>
                )}
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">{project.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium max-w-4xl">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-5 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-2xl text-[13px] font-bold border border-gray-100 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-primary text-white rounded-2xl font-bold shadow-2xl transition-all"
                >
                  View Details & Source <ExternalLink className="w-5 h-5" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-12 text-center"
          >
            Connect with Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Email', value: ownerData.email, icon: <Mail className="w-6 h-6" />, color: 'primary', link: `mailto:${ownerData.email}` },
              { label: 'Phone', value: ownerData.phone, icon: <Phone className="w-6 h-6" />, color: 'accent-orange', link: `tel:${ownerData.phone.replace(/\s+/g, '')}` },
              { label: 'LinkedIn', value: ownerData.socials.find(s => s.platform === 'LinkedIn')?.username || 'yashnagar', icon: <Linkedin className="w-6 h-6" />, color: 'primary', link: ownerData.socials.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com/in/yashnagar' },
              { label: 'GitHub', value: ownerData.socials.find(s => s.platform === 'GitHub')?.username || 'Yashnagar67', icon: <Github className="w-6 h-6" />, color: 'gray-900', link: ownerData.socials.find(s => s.platform === 'GitHub')?.url || 'https://github.com/Yashnagar67' }
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center gap-4 text-center border border-gray-100 dark:border-gray-800 shadow-lg"
              >
                <div className={`p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl text-primary`}>
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{contact.label}</p>
                  <p className="text-gray-900 dark:text-white font-bold">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

      </div>

      {/* Theme Toggle & Chat Button (Fixed) */}
      <div className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-50 flex flex-col gap-4">
        <motion.button
          initial={{ scale: 0, x: -20 }}
          animate={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700"
        >
          <span className="material-symbols-outlined text-2xl">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {!chatOpen && (
          <motion.button
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 20 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setChatOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-30 bg-primary text-white p-4 rounded-2xl shadow-2xl shadow-primary/30 flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat_bubble</span>
            <span className="hidden md:block font-bold text-sm pr-2">Chat with Yash</span>
            <span className="md:hidden font-bold text-[11px] pr-1">Chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {chatOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 pointer-events-auto"
              onClick={() => setChatOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 w-[94vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white dark:bg-[#1c2433] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white/80 dark:bg-[#1c2433]/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="./public/IMG_20241225_171640-removebg-preview.png"
                      alt="Yash Nagar"
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1c2433] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Yash Nagar</h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors group"
                >
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white transition-colors">close</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-[#101622] scrollbar-hide">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-4 text-sm md:text-base ${msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm shadow-lg'
                      : 'bg-white dark:bg-[#252e40] text-gray-800 dark:text-gray-200 rounded-tl-sm shadow-sm border border-gray-100 dark:border-gray-800'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight, rehypeRaw]}
                            components={{
                              code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                const codeString = String(children).replace(/\n$/, '');
                                const codeId = `code-${msg.id}-${Math.random()}`;
                                return !inline && match ? (
                                  <div className="relative group">
                                    <button
                                      onClick={() => {
                                        navigator.clipboard.writeText(codeString);
                                        setCopiedCode(codeId);
                                        setTimeout(() => setCopiedCode(null), 2000);
                                      }}
                                      className="absolute top-2 right-2 p-2 bg-gray-800/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      {copiedCode === codeId ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
                                    </button>
                                    <code className={className} {...props}>{children}</code>
                                  </div>
                                ) : <code className={className} {...props}>{children}</code>;
                              }
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#252e40] p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-white dark:bg-[#1c2433] border-t border-gray-100 dark:border-gray-800">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-gray-100 dark:bg-[#101622] rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white"
                    disabled={loading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={loading || !input.trim()}
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="material-symbols-outlined">send</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="w-full py-12 border-t border-gray-100 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
            © {new Date().getFullYear()} Yash Nagar. Hybrid Bento Design v1.0.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
