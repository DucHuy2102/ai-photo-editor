'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkle } from 'lucide-react';
import Slider_BeforeAfter from './Slider_BeforeAfter';

export default function HeroSection() {
    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section
            id='hero'
            className='min-h-screen overflow-hidden relative 
            flex items-center justify-center pt-40 sm:pt-30 md:pt-20'
        >
            {/* background gradient */}
            <div
                className='absolute inset-0 opacity-70
            bg-linear-to-br from-background via-background to-muted'
            />

            {/* floating animation */}
            <div
                className='absolute top-20 left-10 w-64 h-64 bg-primary/20 
            rounded-full blur-3xl animate-float'
            />
            <div
                className='absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 
            rounded-full blur-3xl animate-float'
                style={{ animationDelay: '-1s' }}
            />

            {/* contents */}
            <div
                className='container mx-auto px-4 grid lg:grid-cols-2 
            gap-12 items-center relative z-10'
            >
                {/* left content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center lg:text-left px-10'
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='inline-flex items-center space-x-2 bg-gradient-glass 
                        rounded-full px-4 py-2 mb-6 glass border border-card-border'
                    >
                        <Sparkle className='h-4 w-4 text-primary' />
                        <span className='text-sm font-medium'>Powered by AI Magic</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className='text-5xl lg:text-7xl font-bold leading-tight mb-6'
                    >
                        <span className='bg-gradient-primary bg-clip-text! text-transparent'>
                            PicsAI
                        </span>
                        <br />
                        <span className='text-foreground'>The Ultimate AI Photo Editor</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='text-xl text-muted-foreground mb-8 max-w-2xl sm:tracking-wide'
                    >
                        Transform your photos with AI-powered editing tools. Remove backgrounds,
                        enhance details, and create stunning visuals in seconds. Unleash your
                        creativity with <span className='text-primary font-semibold'>PicsAI</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className='flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-x-4'
                    >
                        <Button
                            variant='hero'
                            size={'lg'}
                            onClick={() => scrollToSection('editor')}
                            className='group text-white cursor-pointer w-full sm:w-50'
                        >
                            <Play className='h-5 w-5 group-hover:animate-pulse' />
                            Try Free Now
                        </Button>
                        <Button
                            variant='secondary'
                            size={'lg'}
                            onClick={() => scrollToSection('editor')}
                            className='group text-white cursor-pointer w-full sm:w-50'
                        >
                            Launch App
                            <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-all duration-200' />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='mt-4 sm:mt-6 md:mt-8 flex items-center justify-center lg:justify-start 
                    space-x-6 text-sm text-muted-foreground'
                    >
                        <div className='flex items-center space-x-2'>
                            <div className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                            <span className='font-semibold'>Unlimited Uploads on Pro</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-2 h-2 rounded-full bg-secondary animate-pulse' />
                            <span className='font-semibold'>Unlimited Edits</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* right content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='flex justify-center mb-5 lg:mb-0'
                >
                    <Slider_BeforeAfter />
                </motion.div>
            </div>
        </section>
    );
}
