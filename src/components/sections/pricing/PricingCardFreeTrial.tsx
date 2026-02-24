'use client';
import { ArrowRight, Star } from 'lucide-react';

export default function PricingCardFreeTrial() {
    const scrollToEditor = () => {
        const element = document.getElementById('editor');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className='relative group overflow-hidden rounded-3xl p-px transition duration-200'
            style={{ '--card-color': '#818cf8' } as React.CSSProperties}
        >
            <div className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                <div
                    className='absolute -inset-full aspect-square animate-[spin_4s_linear_infinite] 
                            bg-[conic-gradient(from_0deg,transparent_0,transparent_70%,var(--card-color)_100%)]'
                />
            </div>

            <div
                className='relative z-10 p-6 rounded-[calc(1.5rem-1px)] bg-zinc-950/70 backdrop-blur-sm 
                            flex items-center justify-between w-full h-full group-hover:bg-zinc-900/70 transition-colors'
            >
                <div>
                    <h4 className='text-white font-bold mb-1'>Trial Version</h4>
                    <p className='text-zinc-500 text-sm mb-4'>3 daily credits • Standard res</p>
                    <button
                        onClick={scrollToEditor}
                        className='text-sm font-bold text-zinc-300 flex group-hover:translate-y-0.5
                    cursor-pointer items-center gap-2 group-hover:text-primary transition duration-300'
                    >
                        Continue with Free <ArrowRight size={14} />
                    </button>
                </div>

                <div
                    className='h-10 w-10 rounded-full bg-white/5 border 
                                border-white/10 group-hover:border-primary group-hover:scale-110 
                                transition duration-200 flex items-center justify-center relative z-20'
                >
                    <Star
                        size={14}
                        className='text-zinc-400 group-hover:text-primary transition-colors'
                    />
                </div>
            </div>
        </div>
    );
}
