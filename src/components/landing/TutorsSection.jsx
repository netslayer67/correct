import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, MapPin, BookOpen, Award, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const TutorsSection = ({ tutors, handleCTAClick }) => {
    const [filters, setFilters] = useState({
        location: 'Semua',
        level: 'Semua',
    });

    const handleFilterClick = (type, value) => {
        setFilters((prev) => ({ ...prev, [type]: value }));
        handleCTAClick?.('filter-tutor');
    };

    return (
        <section id="tutors" className="relative py-28 bg-gradient-to-b from-blue-950 via-sky-900 to-blue-950">
            <div className="absolute inset-0 -z-10 backdrop-blur-lg bg-white/5" />

            <div className="container-max text-white">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Temukan <span className="text-sky-400">Guru Terbaik</span> Kami
                    </h2>
                    <p className="text-lg text-white/80 font-light">
                        Pilih dari daftar guru profesional kami yang siap membantu kamu mencapai target bahasa Inggris.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-x-2">
                        <SlidersHorizontal className="size-4 text-white/60" />
                        <span className="text-sm font-medium text-white">Filter:</span>
                    </div>

                    {['Online', 'Offline', 'Semua'].map((loc) => (
                        <Button
                            key={loc}
                            onClick={() => handleFilterClick('location', loc)}
                            size="sm"
                            variant="ghost"
                            className={cn(
                                'rounded-full border border-white/10 bg-white/5 text-sm text-white/70 px-4 hover:bg-white/10 hover:text-white transition',
                                filters.location === loc && 'bg-white/20 text-white'
                            )}
                        >
                            {loc}
                        </Button>
                    ))}

                    {['Beginner', 'Intermediate', 'Advanced', 'Semua'].map((lvl) => (
                        <Button
                            key={lvl}
                            onClick={() => handleFilterClick('level', lvl)}
                            size="sm"
                            variant="ghost"
                            className={cn(
                                'rounded-full border border-white/10 bg-white/5 text-sm text-white/70 px-4 hover:bg-white/10 hover:text-white transition',
                                filters.level === lvl && 'bg-white/20 text-white'
                            )}
                        >
                            {lvl}
                        </Button>
                    ))}
                </motion.div>

                {/* Tutor Cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {tutors.map((tutor) => (
                        <motion.div
                            key={tutor.id}
                            variants={cardVariants}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden group transition-all hover:shadow-xl hover:scale-[1.01]"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1660485344976-e24706f5ba78"
                                    alt={`${tutor.name} - English tutor`}
                                />
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star className="size-3.5 text-yellow-400 fill-yellow-400" />
                                    {tutor.rating}
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{tutor.name}</h3>
                                    <p className="text-sm text-sky-300">{tutor.specialization}</p>
                                </div>

                                <div className="text-sm text-white/70 space-y-2 border-t border-white/10 pt-4">
                                    <div className="flex items-center"><MapPin className="size-4 mr-2" /> {tutor.location}</div>
                                    <div className="flex items-center"><BookOpen className="size-4 mr-2" /> Level {tutor.level}</div>
                                    <div className="flex items-center"><Award className="size-4 mr-2" /> {tutor.experience} pengalaman</div>
                                </div>

                                <Button
                                    onClick={() => handleCTAClick('book-tutor')}
                                    className="w-full mt-2 bg-sky-600 text-white hover:bg-sky-500 transition-all"
                                >
                                    Pesan Sesi
                                    <ArrowRight className="size-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TutorsSection;
