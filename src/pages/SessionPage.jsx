import React from 'react';
import {
    Video,
    VideoOff,
    Mic,
    MicOff,
    MessageCircle,
    MonitorOff,
    PhoneOff
} from 'lucide-react';

const SessionPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 text-white">

            {/* Header / Top Bar */}
            <div className="flex justify-between items-center px-6 py-4 bg-background/20 backdrop-blur border-b border-white/10 shadow-md">
                <div>
                    <h1 className="text-lg md:text-xl font-bold tracking-tight">
                        🧑‍🏫 Kelas TOEFL Practice
                    </h1>
                    <p className="text-xs text-white/50">Sesi Online Bersama Guru</p>
                </div>
                <div className="text-sm text-white/60">⏱ Durasi: 45:23</div>
            </div>

            {/* Main Area */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                {/* Video Feeds */}
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div
                            key={n}
                            className="relative aspect-video rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-md"
                        >
                            <div className="text-sm text-white/60">
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

            {/* Control Bar */}
            <div className="px-6 py-4 bg-background/20 backdrop-blur border-t border-white/10 flex justify-center gap-4">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <Mic className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <Video className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                    <MonitorOff className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white transition">
                    <PhoneOff className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default SessionPage;
