'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CurvedArrow = ({
    className,
    direction = 'left',
}: {
    className?: string;
    direction?: 'left' | 'right';
}) => (
    <svg
        viewBox='0 0 100 60'
        className={`${className} ${direction === 'right' ? '-scale-x-100' : ''}`}
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
    >
        <path d='M10,10 Q50,60 90,10' strokeLinecap='round' />
        <path d='M10,10 L22,12 M10,10 L8,22' strokeLinecap='round' />
    </svg>
);

export default function Slider_BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='relative w-full max-w-2xl mx-auto'
        >
            <div
                ref={containerRef}
                onMouseMove={(e) => isDragging && handleMove(e.clientX)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                className='relative w-full rounded-2xl aspect-16/10 overflow-hidden glass 
                border-2 border-card-border cursor-ew-resize select-none shadow-2xl'
            >
                {/* after image */}
                <div className='absolute inset-0'>
                    <Image
                        fill
                        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb'
                        alt='After'
                        className='object-cover'
                    />
                    <motion.div
                        className='md:hidden absolute right-8 bottom-8 text-right'
                        style={{ opacity: (100 - sliderPosition) / 100 }}
                        animate={{ y: isDragging ? 5 : 0 }}
                    >
                        <p className='font-serif italic text-2xl md:text-3xl drop-shadow-lg text-primary-glow'>
                            After
                        </p>
                    </motion.div>
                </div>

                {/* before image */}
                <div
                    className='absolute inset-0 overflow-hidden border-r-2 border-white/50'
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        fill
                        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb'
                        alt='Before'
                        className='object-cover grayscale'
                    />
                    <motion.div
                        className='md:hidden absolute left-8 bottom-8'
                        style={{ opacity: sliderPosition / 100 }}
                        animate={{ y: isDragging ? 5 : 0 }}
                    >
                        <p className='font-serif italic text-2xl md:text-3xl drop-shadow-lg text-secondary-glow'>
                            Before
                        </p>
                    </motion.div>
                </div>

                {/* slider */}
                <div
                    className='absolute top-0 bottom-0 w-1 bg-white z-10 group'
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    onMouseDown={() => setIsDragging(true)}
                >
                    <div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full
                    shadow-xl flex items-center justify-center group-active:scale-90 transition-transform'
                    >
                        <div className='flex gap-1'>
                            <div className='w-0.5 h-4 bg-zinc-400 rounded-full' />
                            <div className='w-0.5 h-4 bg-zinc-400 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className='text-center mt-4 text-sm text-muted-foreground'
            >
                Drag the slider to see the magic ✨
            </motion.p>

            {/* label - disapear when the slider is at the edge */}
            {/* before label */}
            <motion.div
                className='absolute md:-left-8 md:-top-22 lg:-left-25 lg:-top-10 hidden md:flex flex-col gap-3 
                items-center text-primary-glow'
                style={{ opacity: sliderPosition / 100 }}
                animate={{ y: isDragging ? 5 : 0 }}
            >
                <span className='font-serif italic text-3xl'>Before</span>
                <CurvedArrow className='w-12 h-10 rotate-45' direction='left' />
            </motion.div>

            {/* after label */}
            <motion.div
                className='absolute right-0 md:-bottom-3 lg:-bottom-7 hidden md:flex items-center 
                justify-center gap-3 text-secondary-glow'
                style={{ opacity: (100 - sliderPosition) / 100 }}
                animate={{ y: isDragging ? 5 : 0 }}
            >
                <span className='font-serif italic text-4xl'>After</span>
                <CurvedArrow className='w-12 h-10 -rotate-45' direction='right' />
            </motion.div>
        </motion.div>
    );
}
