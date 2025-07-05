import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock,
    ShieldCheck,
    CalendarCheck,
    LogOut,
    Layers,
    FileText,
    Activity,
    Download,
    CheckCircle,
    Mic,
    BookOpen,
    ListChecks,
    User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ProfilePage – Luxury Premium Dashboard v2
 * - Sidebar avatar card + tabbed main content
 * - Detailed performance breakdown (attendance, comprehension, fluency, homework)
 * - High‑end SaaS aesthetics: glass panels, blur, transitions, parallax hover
 */

const ProfilePage = () => {
    const [tab, setTab] = useState('overview');

    /* ─── Dummy Data ─────────────────────────────────────────────────── */
    const user = {
        name: 'Rizky Aditya',
        email: 'rizky.aditya@email.com',
        avatar: 'https://ui-avatars.com/api/?name=Rizky+Aditya&background=0D8ABC&color=fff',
        level: 'Intermediate',
        score: 82,
        totalHours: 26,
    };

    const breakdown = [
        { title: 'Kehadiran', value: 95, icon: CalendarCheck, color: '#34d399' },
        { title: 'Daya Tangkap', value: 88, icon: BookOpen, color: '#3b82f6' },
        { title: 'Kelancaran', value: 81, icon: Mic, color: '#fbbf24' },
        { title: 'Tugas Rumah', value: 92, icon: ListChecks, color: '#a855f7' },
    ];

    const orders = [
        {
            id: 'ORD-2025-001',
            pkg: 'IELTS Online Intensive',
            tutor: 'Sarah Johnson',
            date: '05 Jul 2025',
            status: 'Selesai',
        },
        {
            id: 'ORD-2025-002',
            pkg: 'TOEFL Offline Reguler',
            tutor: 'Michael Lee',
            date: '12 Jul 2025',
            status: 'Berlangsung',
        },
    ];

    const certificates = [
        {
            id: 'CERT‑IELTS‑B2',
            level: 'IELTS – B2 Upper‑Intermediate',
            date: '05 Jul 2025',
            link: '#',
        },
        {
            id: 'CERT‑TOEFL‑C1',
            level: 'TOEFL – C1 Advanced',
            date: '11 Oct 2024',
            link: '#',
        },
    ];

    /* ─── Animation Variants ─────────────────────────────────────────── */
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
    };

    /* ─── Components ─────────────────────────────────────────────────── */
    const StatCard = ({ title, value, Icon, color }) => (
        <div className="rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-xl shadow hover:shadow-lg transition">
            <p className="text-white/70 text-sm mb-1 flex items-center gap-2">
                <Icon className="w-4 h-4" /> {title}
            </p>
            <h3 className="text-2xl font-semibold" style={{ color }}>{value}</h3>
        </div>
    );

    const ProgressCircle = ({ percent, color }) => {
        const radius = 50;
        const circum = 2 * Math.PI * radius;
        const offset = circum - (percent / 100) * circum;
        return (
            <svg width="120" height="120" className="rotate-[-90deg]">
                <circle cx="60" cy="60" r={radius} stroke="#1e40af" strokeWidth="8" fill="none" opacity="0.15" />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={color}
                    strokeWidth="8"
                    strokeDasharray={`${circum} ${circum}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        );
    };

    /* ─── Render ─────────────────────────────────────────────────────── */
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white px-4 sm:px-8 lg:px-20 py-32 font-sans"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
                {/* ── Sidebar ───────────────────────────────────────────── */}
                <aside className="lg:col-span-1 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-md hover:scale-105 transition"
                    />
                    <div className="text-center space-y-1">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-xs text-white/60">{user.email}</p>
                    </div>
                    {/* Learning Score Ring */}
                    <div className="relative group">
                        <ProgressCircle percent={user.score} color="#38bdf8" />
                        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition">{user.score}</span>
                    </div>
                    <p className="text-xs text-white/60 -mt-2">Learning Score</p>

                    {/* Tabs */}
                    <div className="w-full flex flex-col gap-3 pt-6">
                        {[
                            { id: 'overview', label: 'Overview', icon: Activity },
                            { id: 'history', label: 'Orders', icon: Layers },
                            { id: 'certs', label: 'Certificates', icon: FileText },
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`flex items-center gap-3 w-full px-5 py-3 rounded-xl text-sm font-semibold border transition ${tab === t.id ? 'bg-sky-600/90 border-sky-500 shadow-lg' : 'bg-white/5 border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                <t.icon className="w-4 h-4" /> {t.label}
                            </button>
                        ))}
                    </div>

                    <Button className="w-full mt-8 bg-gradient-to-r from-red-500 to-pink-500 hover:brightness-110 transition text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                        <LogOut className="w-4 h-4" /> Logout
                    </Button>
                </aside>

                {/* ── Main Content ─────────────────────────────────────── */}
                <div className="lg:col-span-3 min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {tab === 'overview' && (
                            <motion.div key="overview" variants={tabVariants} initial="hidden" animate="show" exit="exit" className="space-y-10">
                                {/* Quick Stats */}
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <StatCard title="Total Hours" value={`${user.totalHours} h`} Icon={Clock} color="#38bdf8" />
                                    <StatCard title="Level" value={user.level} Icon={ShieldCheck} color="#34d399" />
                                    <StatCard title="Account" value="Active" Icon={CalendarCheck} color="#fbbf24" />
                                </div>

                                {/* Performance Breakdown */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Performance Breakdown</h3>
                                    <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                        {breakdown.map((b) => (
                                            <div
                                                key={b.title}
                                                className="relative rounded-2xl bg-white/5 p-6 pt-10 border border-white/10 backdrop-blur-xl shadow hover:shadow-xl transition group"
                                            >
                                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                                    <ProgressCircle percent={b.value} color={b.color} />
                                                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition" style={{ color: b.color }}>
                                                        {b.value}%
                                                    </span>
                                                </div>
                                                <div className="mt-14 text-center">
                                                    <p className="text-sm font-medium flex items-center justify-center gap-1" style={{ color: b.color }}>
                                                        <b.icon className="w-4 h-4" /> {b.title}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {tab === 'history' && (
                            <motion.div key="history" variants={tabVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
                                <h3 className="text-lg font-semibold mb-2">Riwayat Pemesanan</h3>
                                <div className="space-y-4">
                                    {orders.map((o) => (
                                        <div
                                            key={o.id}
                                            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-lg transition"
                                        >
                                            <div className="flex-1">
                                                <p className="font-semibold">{o.pkg}</p>
                                                <p className="text-xs text-white/60">Tutor: {o.tutor} • {o.date}</p>
                                            </div>
                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-medium ${o.status === 'Selesai' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                                    }`}
                                            >
                                                {o.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {tab === 'certs' && (
                            <motion.div key="certs" variants={tabVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
                                <h3 className="text-lg font-semibold mb-2">Sertifikat</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certificates.map((c) => (
                                        <div key={c.id} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
                                            <div>
                                                <p className="font-semibold mb-1 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-400" /> {c.level}</p>
                                                <p className="text-xs text-white/60 mb-4">Diterbitkan: {c.date}</p>
                                            </div>
                                            <a href={c.link} className="mt-auto inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white">
                                                <Download className="w-4 h-4" /> Download
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default ProfilePage;