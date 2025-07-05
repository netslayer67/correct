import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Star, MapPin, BookOpen, Award,
    Globe, School, ArrowLeft, BadgeCheck, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const dummyTutors = [
    {
        id: '1',
        name: 'Sarah Johnson',
        specialization: 'IELTS & Academic Writing',
        rating: 4.9,
        location: 'Jakarta',
        level: 'Advanced',
        experience: '5 tahun',
        imageUrl: 'https://images.unsplash.com/photo-1660485344976-e24706f5ba78',
        pricing: {
            online: [
                { label: '🎯 Trial 30min', price: 'Rp 50rb' },
                { label: '🔥 Intensive 4x/week', price: 'Rp 750rb' },
            ],
            offline: [
                { label: '📍 1x pertemuan (60min)', price: 'Rp 120rb' },
                { label: '📚 8x Offline Reguler', price: 'Rp 850rb' },
            ]
        },
        highlights: [
            'Sertifikasi TESOL & IELTS Trainer Resmi',
            'Berpengalaman dengan lebih dari 400 siswa',
            'Metode belajar fun & interaktif berbasis goals siswa',
            'Mampu mengajar secara bilingual (EN/ID)'
        ],
        schedule: {
            days: ['Senin', 'Selasa', 'Rabu'],
            times: ['09:00', '13:00', '19:00']
        }
    }
];

const TutorDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [mode, setMode] = useState('online');

    const tutor = dummyTutors.find((t) => t.id === id);

    if (!tutor) {
        return <div className="text-center text-white py-20">Guru tidak ditemukan.</div>;
    }

    const pageVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.15 } }
    };

    return (
        <motion.section
            variants={pageVariants}
            initial="hidden"
            animate="show">
            <section className="min-h-screen bg-gradient-to-b from-blue-950 via-sky-900 to-blue-950 text-white pt-32 pb-20 px-6 md:px-16 lg:px-32">
                <div className="max-w-5xl mx-auto">
                    <Button onClick={() => navigate(-1)} variant="ghost" className="mb-10 text-white hover:text-sky-400 hover:bg-transparent transition">
                        <ArrowLeft className="mr-2 size-4" /> Kembali ke Daftar Guru
                    </Button>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
                            <img
                                src={tutor.imageUrl}
                                alt={tutor.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white rounded-full flex items-center gap-1">
                                <Star className="size-3.5 text-yellow-400 fill-yellow-400" />
                                {tutor.rating}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-1">{tutor.name}</h1>
                                <p className="text-sky-300 text-lg">{tutor.specialization}</p>
                            </div>

                            <div className="space-y-3 text-white/80 text-sm">
                                <div className="flex items-center"><MapPin className="size-4 mr-2" /> {tutor.location}</div>
                                <div className="flex items-center"><BookOpen className="size-4 mr-2" /> Level {tutor.level}</div>
                                <div className="flex items-center"><Award className="size-4 mr-2" /> {tutor.experience} pengalaman</div>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><BadgeCheck className="size-5" /> Tentang Tutor</h3>
                                <ul className="list-disc pl-6 text-white/80 text-sm space-y-1">
                                    {tutor.highlights.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Mode Selection */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Clock className="size-5" /> Pilih Mode Belajar</h3>
                                <div className="flex gap-4">
                                    {['online', 'offline'].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setMode(opt)}
                                            className={`px-5 py-2 rounded-full border transition text-sm font-medium ${mode === opt ? 'bg-sky-600 text-white border-sky-500' : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20'}`}
                                        >
                                            {opt === 'online' ? 'Online' : 'Offline'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="mt-6 space-y-6">
                                {tutor.pricing?.[mode]?.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                                            {mode === 'online' ? <Globe className="size-4" /> : <School className="size-4" />} Paket {mode === 'online' ? 'Online' : 'Offline'}
                                        </h3>
                                        <div className="bg-white/10 border border-white/10 rounded-xl p-4 space-y-2 text-sm">
                                            {tutor.pricing[mode].map((item, i) => (
                                                <div key={i} className="flex justify-between">
                                                    <span>{item.label}</span>
                                                    <span>{item.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Jadwal */}
                            <div className="mt-10">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Clock className="size-5" /> Jadwal Tersedia
                                </h3>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {tutor.schedule.days.map((day) =>
                                        tutor.schedule.times.map((time) => {
                                            const slot = `${day} ${time} (${mode})`;
                                            const selected = selectedSlot === slot;
                                            return (
                                                <button
                                                    key={slot}
                                                    onClick={() => setSelectedSlot(slot)}
                                                    className={`rounded-lg px-4 py-2 border ${selected ? 'bg-sky-600 text-white border-sky-500' : 'bg-white/10 border-white/10 text-white/80 hover:bg-white/20'} transition`}
                                                >
                                                    {slot}
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button
                                    onClick={() => navigate('/checkout', {
                                        state: {
                                            slot: selectedSlot,
                                            mode: mode
                                        }
                                    })}
                                    className="bg-sky-600 text-white hover:bg-sky-500 w-full text-base py-6 font-semibold transition"
                                    disabled={!selectedSlot}
                                >
                                    {selectedSlot ? `Booking: ${selectedSlot}` : 'Pilih Jadwal & Mode Belajar'}
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
};

export default TutorDetailPage;