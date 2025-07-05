import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    Star,
    MapPin,
    BookOpen,
    Award,
    ArrowRight,
    SlidersHorizontal,
    Globe,
    School
} from 'lucide-react';
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
    const navigate = useNavigate();


    return (
        <section id="tutors" className="relative py-28 bg-gradient-to-b from-blue-950 via-sky-900 to-blue-950 overflow-hidden">
            <div className="absolute inset-0 -z-10 backdrop-blur-2xl bg-white/5 pointer-events-none" />

            <div className="container-max px-6 md:px-12 lg:px-20">
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                        Guru <span className="text-sky-400">Pilihan Profesional</span>
                    </h2>
                    <p className="text-lg text-white/80 font-light">
                        Belajar dari pengajar berpengalaman — online maupun tatap muka, dengan paket fleksibel sesuai gaya belajarmu.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-3 md:gap-5 mb-20"
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

                <motion.div
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {tutors.map((tutor) => (
                        <motion.div
                            key={tutor.id}
                            variants={cardVariants}
                            className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:scale-[1.02] overflow-hidden flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    src={tutor.imageUrl || 'https://images.unsplash.com/photo-1660485344976-e24706f5ba78'}
                                    alt={tutor.name}
                                />
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star className="size-3.5 text-yellow-400 fill-yellow-400" />
                                    {tutor.rating}
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-1 flex flex-col">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">{tutor.name}</h3>
                                    <p className="text-sm text-sky-300">{tutor.specialization}</p>
                                </div>

                                <div className="text-sm text-white/70 space-y-2 border-t border-white/10 pt-4">
                                    <div className="flex items-center"><MapPin className="size-4 mr-2" /> {tutor.location}</div>
                                    <div className="flex items-center"><BookOpen className="size-4 mr-2" /> Level {tutor.level}</div>
                                    <div className="flex items-center"><Award className="size-4 mr-2" /> {tutor.experience} pengalaman</div>
                                </div>

                                <div className="mt-4 bg-white/10 rounded-lg px-4 py-4 text-xs text-white/70 space-y-4 border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2 text-sm text-white font-medium">
                                            <Globe className="size-4" /> Online Package
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>🎯 Trial 30min</span>
                                                <span>Rp 50rb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>🔥 Intensive 4x/week</span>
                                                <span>Rp 750rb</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mt-4 mb-2 text-sm text-white font-medium">
                                            <School className="size-4" /> Offline Package
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>📍 1x pertemuan (60min)</span>
                                                <span>Rp 120rb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>📚 8x Offline Reguler</span>
                                                <span>Rp 850rb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-5">
                                    <Button
                                        onClick={() => navigate(`/tutor/${tutor.id}`)}
                                        className="w-full bg-sky-600 text-white hover:bg-sky-500 transition-all"
                                    >
                                        Lihat Profil & Paket <ArrowRight className="size-4 ml-2" />
                                    </Button>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TutorsSection;
