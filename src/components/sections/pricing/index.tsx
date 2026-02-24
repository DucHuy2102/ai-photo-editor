import PricingCardPro from './PricingCardPro';
import PricingCardFreeTrial from './PricingCardFreeTrial';

export default function PricingSection() {
    return (
        <section id='pricing' className='py-32 bg-zinc-950 relative overflow-hidden'>
            <div
                className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 
            bg-primary/5 blur-[120px] rounded-full pointer-events-none'
            />

            <div className='container mx-auto px-4 relative z-10'>
                <div
                    className='flex flex-col lg:flex-row gap-16 items-center 
                lg:items-start justify-between max-w-6xl mx-auto'
                >
                    {/* left side */}
                    <div className='lg:w-1/3 text-left space-y-8'>
                        <div>
                            <h2
                                className='text-5xl lg:text-7xl font-black 
                            tracking-tighter text-white mb-6'
                            >
                                Unfair <br />
                                <span className='text-secondary md:text-white lg:text-primary '>
                                    Advantage
                                </span>
                            </h2>
                            <p className='text-zinc-400 text-lg leading-relaxed'>
                                Professional AI tools shouldn&apos;t cost a fortune. Start for free,
                                upgrade when you&apos;re ready to dominate. 
                            </p>
                        </div>

                        {/* free trial */}
                        <PricingCardFreeTrial />
                    </div>

                    {/* right side */}
                    <div className='lg:w-3/5 w-full'>
                        <PricingCardPro />
                    </div>
                </div>
            </div>
        </section>
    );
}
