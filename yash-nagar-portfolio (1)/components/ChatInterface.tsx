import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, OwnerData } from '../types';
import { sendMessageToGemini } from '../services/ai';

interface ChatInterfaceProps {
    isOpen: boolean;
    onClose: () => void;
    ownerData: OwnerData;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose, ownerData }) => {
    // Get the first name for the welcome message
    const firstName = ownerData.name.split(' ')[0];

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'init',
            role: 'model',
            text: `Hi there! 👋 I'm ${firstName}'s AI assistant. Ask me anything about his work, experience, or what he's up to lately!`,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: inputText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        const replyText = await sendMessageToGemini(messages, userMsg.text, ownerData);

        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: replyText,
            timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, aiMsg]);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />

                    {/* Chat Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed z-50 bottom-4 right-4 md:bottom-20 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white dark:bg-[#1c2433] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white/50 dark:bg-[#1c2433]/50 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src={ownerData.profileImage} alt={ownerData.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1c2433] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{ownerData.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Replies instantly</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-gray-500">close</span>
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#101622] scrollbar-hide">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === 'user'
                                                ? 'bg-primary text-white rounded-tr-sm'
                                                : 'bg-white dark:bg-[#252e40] text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-800 rounded-tl-sm'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-[#252e40] p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 dark:border-gray-800 flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 bg-white dark:bg-[#1c2433] border-t border-gray-100 dark:border-gray-800 flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Ask me about my projects..."
                                className="flex-1 bg-gray-100 dark:bg-[#101622] text-gray-900 dark:text-white rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            <button 
                                type="submit"
                                disabled={!inputText.trim() || isTyping}
                                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};