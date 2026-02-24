'use client';

import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { MouseEvent } from 'react';

export default function PricingCardPro() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const scrollToEditor = () => {
        const element = document.getElementById('editor');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='relative h-full w-full rounded-[3rem] bg-zinc-900/50 
            border border-white/10 p-8 lg:p-12 shadow-2xl overflow-hidden group'
        >
            <div
                className='absolute inset-0 bg-linear-to-br 
            from-primary/10 via-transparent to-transparent opacity-0 
            group-hover:opacity-100 transition-opacity duration-700'
            />

            <div className='relative z-10 grid md:grid-cols-2 gap-12'>
                {/* left side */}
                <div className='flex flex-col justify-between'>
                    <div>
                        <div
                            className='inline-flex items-center gap-2 px-3 py-1 rounded-full 
                        bg-primary/10 border border-primary/20 text-primary 
                        text-[10px] font-black uppercase tracking-tighter mb-6'
                        >
                            <Sparkles size={12} fill='currentColor' /> Pro Member
                        </div>
                        <h3 className='text-4xl font-bold text-white mb-2 italic'>
                            Pics{' '}
                            <span className='bg-gradient-primary bg-clip-text! text-transparent'>
                                Pro
                            </span>
                        </h3>
                        <p className='text-zinc-500 text-sm'>
                            Everything you need to create viral content.
                        </p>
                    </div>

                    <div className='mt-12 lg:mt-0'>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-7xl font-black text-white tracking-tighter'>
                                $19
                            </span>
                            <span className='text-zinc-500 font-medium'>/month</span>
                        </div>
                        <Button
                            variant='hero'
                            onClick={scrollToEditor}
                            className='w-full h-14 mt-8 rounded-2xl text-lg font-bold cursor-pointer
                            shadow-2xl shadow-primary/20 hover:scale-[1.02] 
                            hover:text-white transition-all duration-200 group'
                        >
                            Get Full Access
                            <ArrowUpRight className='group-hover:rotate-45 transition-transform duration-300' />
                        </Button>
                    </div>
                </div>

                {/* right side */}
                <div className='bg-white/5 rounded-4xl p-8 border border-white/5 space-y-4'>
                    <p className='text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4'>
                        Included in Pro:
                    </p>
                    {[
                        'Unlimited 4K AI Upscaling',
                        'Magic Generative Fill',
                        'Batch Processing (Up to 50)',
                        'No Watermarks',
                        'Priority AI Queue',
                        'Commercial Usage Rights',
                    ].map((f) => (
                        <div key={f} className='flex items-center gap-3'>
                            <div
                                className='h-5 w-5 rounded-full bg-primary/20 
                            flex items-center justify-center text-primary'
                            >
                                <Check size={12} strokeWidth={4} />
                            </div>
                            <span className='text-zinc-300 text-sm font-medium'>{f}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className='absolute inset-0 pointer-events-none bg-linear-to-tr 
            from-transparent via-white/2 to-transparent -translate-x-full 
            group-hover:-translate-x-full transition-transform duration-1000'
            />
        </motion.div>
    );
}
