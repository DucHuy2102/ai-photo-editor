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
                        className='flex items-center space-x-2 cursor-pointer'
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollToSection('hero')}
                    >
                        <div className='relative'>
                            <Sparkles
                                fill='transparent'
                                className='h-8 w-8 text-primary animate-glow-pulse'
                            />
                            <div className='absolute inset-0 h-8 w-8 text-secondary animate-glow-pulse opacity-50' />
                        </div>
                        <span className='text-2xl font-bold bg-gradient-primary bg-clip-text! text-transparent'>
                            Pics AI
                        </span>
                    </motion.div>

                    {/* desktop menu button */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <button
                            className='text-foreground hover:text-primary transition-colors font-medium'
                            onClick={() => scrollToSection('features')}
                        >
                            Features
                        </button>
                        <button
                            className='text-foreground hover:text-primary transition-colors font-medium'
                            onClick={() => scrollToSection('pricing')}
                        >
                            Pricing
                        </button>
                        <Button
                            variant={'hero'}
                            className={`font-semibold w-30 cursor-pointer
                                ${session?.user ? 'text-zinc-100' : 'text-zinc-900'}`}
                            onClick={handleSubmit}
                        >
                            {session?.user ? 'Launch App' : 'Sign In'}
                        </Button>
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
                    <div className='py-4 flex items-center space-x-4'>
                        <button
                            className='block w-full text-left text-foreground hover:text-primary transition-colors font-medium'
                            onClick={() => scrollToSection('features')}
                        >
                            Features
                        </button>
                        <button
                            className='block w-full text-left text-foreground hover:text-primary transition-colors font-medium'
                            onClick={() => scrollToSection('pricing')}
                        >
                            Pricing
                        </button>
                        <Button
                            variant={'hero'}
                            className={`font-semibold w-24 cursor-pointer
                                ${session?.user ? 'text-zinc-100' : 'text-zinc-900'}`}
                            onClick={handleSubmit}
                        >
                            {session?.user ? 'Launch App' : 'Sign In'}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
