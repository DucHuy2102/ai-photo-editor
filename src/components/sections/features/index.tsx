'use client';
import { motion } from 'framer-motion';
import { Crop, Expand, Scissors, Type, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
    {
        icon: Scissors,
        title: 'Background Removal',
        description:
            'Clean, studio-quality cutouts in a single click using precision AI. Remove any background instantly.',
        footerText: 'Perfect for e-commerce.',
        cta: 'Remove Now',
        gradient: 'from-[#818cf8] via-[#a855f7] to-[#ec4899]',
        color: '#818cf8',
        delay: 0.1,
    },
    {
        icon: Expand,
        title: 'Generative Fill',
        description:
            'Seamlessly expand borders and imagine what&quot;s beyond the frame. Create perfect aspect ratios effortlessly.',
        footerText: 'Infinity canvas mode.',
        cta: 'Expand',
        gradient: 'from-[#f59e0b] via-[#f43f5e] to-[#9f1239]',
        color: '#f59e0b',
        delay: 0.2,
    },
    {
        icon: Zap,
        title: 'Upscale & Enhance',
        description:
            'Fix details and boost resolution up to 4x for stunning clarity. Transform low-res into high-quality images instantly.',
        footerText: 'Crystal clear 4K output.',
        cta: 'Upscale',
        gradient: 'from-[#22d3ee] via-[#3b82f6] to-[#1e40af]',
        color: '#22d3ee',
        delay: 0.3,
    },
    {
        icon: Crop,
        title: 'Smart Crop',
        description:
            'Auto-detect faces and subjects for the perfect social media crop. No more manual adjustments.',
        footerText: 'Always center-stage.',
        cta: 'Smart Crop',
        gradient: 'from-[#34d399] via-[#059669] to-[#064e3b]',
        color: '#34d399',
        delay: 0.4,
    },
    {
        icon: Type,
        title: 'Brand Overlay',
        description:
            'Secure your work with professional watermarks and stylish text. AI ensures perfect placement every time.',
        footerText: 'Protect your legacy.',
        cta: 'Add Branding',
        gradient: 'from-[#94a3b8] via-[#475569] to-[#1e293b]',
        color: '#94a3b8',
        delay: 0.5,
    },
];

export default function FeaturesSection() {
    return (
        <section id='features' className='py-24 relative overflow-hidden'>
            <div className='absolute inset-0 bg-linear-to-b from-transparent via-muted/20 to-transparent' />
            <div className='container mx-auto px-4 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl lg:text-6xl font-bold mb-6'>
                        <span className='text-foreground'>Magical </span>
                        <span className='bg-gradient-primary bg-clip-text! text-transparent'>
                            Features
                        </span>
                    </h2>

                    <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                        Transform your photos with cutting-edge AI technology. Each feature is
                        designed to give you professional results in seconds, not hours.
                    </p>
                </motion.div>

                <div className='grid lg:grid-cols-3 gap-8 mb-12'>
                    {features?.slice(0, 3).map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                <div className='grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                    {features.slice(3).map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index + 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}
