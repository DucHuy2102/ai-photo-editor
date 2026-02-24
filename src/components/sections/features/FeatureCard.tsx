'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
    feature: {
        icon: React.ElementType;
        title: string;
        description: string;
        color: string;
        gradient: string;
        footerText: string;
        cta?: string;
    };
    index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
    const { icon: Icon, title, description, color, gradient, footerText, cta } = feature;
    console.log({ color });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ '--card-color': color, '--card-gradient': gradient } as React.CSSProperties}
            className='group relative h-full overflow-hidden rounded-4xl border border-white/10 
            bg-white/3 p-px transition-all duration-500 hover:border-white/20'
        >
            {/* border beam */}
            <div className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div
                    className='absolute -inset-full aspect-square animate-[spin_4s_linear_infinite] 
                    bg-[conic-gradient(from_0deg,transparent_0,transparent_70%,var(--card-color)_100%)]'
                />
            </div>

            {/* card content */}
            <div
                className='relative z-10 h-full w-full overflow-hidden rounded-[1.95rem] p-8 transition-all duration-500 
                bg-zinc-900/80 backdrop-blur-md group-hover:bg-[color-mix(in_srgb,var(--card-color)_5%,#09090b)]'
            >
                <div className='absolute inset-0 bg-noise opacity-[0.05] pointer-events-none' />

                {/* icon */}
                <div className='relative mb-8 flex h-14 w-14 items-center justify-center'>
                    <div
                        className='absolute inset-0 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-150'
                        style={{ backgroundColor: color }}
                    />
                    <div
                        className='relative flex h-12 w-12 items-center justify-center rounded-xl 
                    bg-white/5 border border-white/10 backdrop-blur-sm'
                    >
                        <Icon
                            className='h-6 w-6 transition-transform duration-500 group-hover:scale-110
                            group-hover:text-(--card-color) group-hover:drop-shadow-[0_0_8px_var(--card-color)]'
                        />
                    </div>
                </div>

                {/* title & description */}
                <div className='space-y-3'>
                    <h3 className='text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors'>
                        {title}
                    </h3>
                    <p className='text-[15px] leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors'>
                        {description}
                    </p>
                </div>

                {/* shine effect */}
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                    <div
                        className='absolute top-0 -inset-x-full h-full w-full bg-linear-to-r 
                    from-transparent via-white/3 to-transparent -skew-x-12 group-hover:animate-shine'
                    />
                </div>

                {/* footer Info */}
                <div className='mt-8 pt-6 border-t border-white/5 flex items-end justify-between'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-[10px] uppercase tracking-widest text-zinc-500 font-bold'>
                            Feature focus
                        </span>
                        <span className='text-xs text-zinc-300 font-medium italic'>
                            &quot;{footerText}&quot;
                        </span>
                    </div>

                    <button
                        className='relative flex items-center justify-center h-10 w-10 rounded-full overflow-hidden
                    bg-white/5 border border-white/10 text-white transition-all duration-300 cursor-pointer
                    group-hover:w-34 group-hover:bg-(--card-color) group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--card-color),0.3)]'
                    >
                        <div className='absolute inset-0 flex items-center justify-center gap-1 group-hover:px-4'>
                            <span className='opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold whitespace-nowrap'>
                                {cta}
                            </span>
                            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:rotate-45' />
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
