import React, { useState, useEffect } from 'react';
import {
    Video,
    VideoOff,
    Mic,
    MicOff,
    MessageCircle,
    MonitorOff,
    PhoneOff,
    Users,
    Share2,
    Pencil,
    TimerReset,
    Loader2,
    UserCircle2
} from 'lucide-react';

const SessionPage = () => {
    const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes countdown

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 text-white">
            {/* Top Session Bar (No Navbar) */}
            <div className="flex justify-between items-center px-6 py-4 bg-background/20 backdrop-blur border-b border-white/10 shadow-md">
                <div>
                    <h1 className="text-lg md:text-xl font-bold tracking-tight">
                        🧑‍🏫 Kelas TOEFL Practice
                    </h1>
                    <p className="text-xs text-white/50">Sesi Online Bersama Guru</p>
                </div>
                <div className="text-sm text-white/60 flex items-center gap-2">
                    <TimerReset className="w-4 h-4" />
                    Sisa Waktu: {formatTime(timeLeft)}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                {/* Video Feeds */}
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div
                            key={n}
                            className="relative aspect-video rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-md"
                        >
                            <div className="absolute top-2 left-2 text-xs text-white/80">
                                <UserCircle2 className="w-4 h-4 inline-block mr-1" />
                                {n === 1 ? 'Guru (Anda)' : `Peserta #${n}`}
                            </div>
                            <div className="absolute bottom-2 left-2 bg-white/10 text-white text-xs px-2 py-1 rounded">
                                Mic: Aktif
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Sidebar */}
                <div className="hidden md:flex flex-col bg-white/5 rounded-xl border border-white/10 p-4">
                    <h2 className="text-lg font-semibold mb-3">💬 Chat Kelas</h2>
                    <div className="flex-1 overflow-y-auto space-y-2 text-sm text-white/90 mb-3">
                        <p><b>Guru:</b> Selamat datang di sesi speaking.</p>
                        <p><b>Kamu:</b> Siap bu 🙌</p>
                        <p><b>Guru:</b> Kita mulai dari soal #1 ya!</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Ketik pesan..."
                        className="w-full text-sm px-3 py-2 rounded-md bg-white/10 placeholder-white/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                </div>
            </div>

            {/* Whiteboard Section */}
            <div className="px-6 pb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-64 md:h-80 flex flex-col items-start justify-start relative">
                    <div className="absolute top-3 right-3 text-xs text-white/60 flex items-center gap-2">
                        <Pencil className="w-4 h-4" />
                        Whiteboard Interaktif
                    </div>
                    <p className="text-white/40 italic text-sm">(Fitur whiteboard placeholder - implementasi realtime WebSocket / Canvas API)</p>
                    <div className="mt-4 w-full h-full bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-sm">
                        ✍️ Tempat coret-coret ide, jawaban, atau penjelasan tutor.
                    </div>
                </div>
            </div>

            {/* Control Bar */}
            <div className="px-6 py-4 bg-background/20 backdrop-blur border-t border-white/10 flex justify-center flex-wrap gap-4">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Mic">
                    <Mic className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Video">
                    <Video className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Chat">
                    <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Share Screen">
                    <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="End Screen">
                    <MonitorOff className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white transition" title="End Call">
                    <PhoneOff className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default SessionPage;
