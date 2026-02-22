'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    }

    async function handleSubmit() {
        if (session?.user) {
            scrollToSection('editor');
        } else {
            await signIn('google');
        }
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
                ${isScrolled ? 'shadow-glass border-b border-card-border backdrop-blur-glass' : 'bg-transparent'}
              `}
        >
            <div className='container mx-auto px-10 py-4'>
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <motion.div
                        className='flex items-center gap-3 cursor-pointer group'
                        whileHover={{ scale: 1.02 }}
                        onClick={() => scrollToSection('hero')}
                    >
                        {/* icon logo */}
                        <div
                            className='relative h-10 w-10 rounded-xl p-px overflow-hidden 
                        bg-linear-to-br from-primary/80 via-zinc-500/20 to-secondary/80 shadow-lg shadow-primary/20'
                        >
                            <div
                                className='relative h-full w-full bg-zinc-950/90 rounded-xl flex items-center justify-center 
                            backdrop-blur-xl group-hover:bg-zinc-900/90 transition-colors'
                            >
                                <Sparkles
                                    fill='currentColor'
                                    strokeWidth={0}
                                    className='h-5 w-5 text-zinc-100 drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]'
                                />
                            </div>
                            <div
                                className='absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                            />
                        </div>

                        {/* text logo */}
                        <span className='text-xl font-bold tracking-tight text-foreground'>
                            Pics
                            <span className='bg-gradient-primary bg-clip-text! text-transparent ml-1'>
                                AI
                            </span>
                        </span>
                    </motion.div>

                    {/* desktop menu button */}
                    <div className='hidden md:flex items-center space-x-10'>
                        {['Features', 'Pricing'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className='group relative py-2 text-md font-medium text-zinc-400 transition-colors hover:text-zinc-100'
                            >
                                {item}
                                <span
                                    className='absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent 
                                transition-transform duration-300 group-hover:scale-x-100'
                                />
                            </button>
                        ))}
                        <div className='pl-4'>
                            <Button
                                variant='hero'
                                onClick={handleSubmit}
                                className={`
                                    relative overflow-hidden px-8 py-5 font-semibold transition-all duration-300
                                    hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]
                                    active:scale-95 cursor-pointer
                                    ${session?.user ? 'bg-zinc-100 text-zinc-900' : 'bg-primary text-primary-foreground'}
                                `}
                            >
                                <span className='relative z-10 flex items-center gap-2'>
                                    {session?.user ? 'Launch App' : 'Sign In'}
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* hamburger icon for mobile*/}
                    <div
                        className='md:hidden text-foreground cursor-pointer'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className='h-6 w-6' />
                        ) : (
                            <Menu className='h-6 w-6' />
                        )}
                    </div>
                </div>

                {/* mobile menu button */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    className='md:hidden overflow-hidden'
                >
                    <div className='py-4 flex items-center justify-between px-3'>
                        {['Features', 'Pricing'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className='group relative py-2 text-md font-medium text-zinc-400 transition-colors hover:text-zinc-100'
                            >
                                {item}
                                <span
                                    className='absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent 
                                transition-transform duration-300 group-hover:scale-x-100'
                                />
                            </button>
                        ))}
                        <div className='pl-4'>
                            <Button
                                variant='hero'
                                onClick={handleSubmit}
                                className={`
                                    relative overflow-hidden px-8 py-5 font-semibold transition-all duration-300
                                    hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]
                                    active:scale-95 cursor-pointer
                                    ${session?.user ? 'bg-zinc-100 text-zinc-900' : 'bg-primary text-primary-foreground'}
                                `}
                            >
                                <span className='relative z-10 flex items-center gap-2'>
                                    {session?.user ? 'Launch App' : 'Sign In'}
                                </span>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
