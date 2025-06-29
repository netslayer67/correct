import React from 'react';
import { CheckCircle, Lock } from 'lucide-react';

const CheckoutPage = () => {
    const handlePayment = () => {
        // 🚧 Simulasi: nanti dihubungkan ke Midtrans Snap Token
        alert("Simulasi pembayaran. Anda akan diarahkan ke Midtrans...");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-sky-800 to-blue-900 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left: Paket Detail */}
                <div className="p-8 md:p-10 space-y-6">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300">
                        Paket TOEFL Intensive
                    </h1>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-400" />
                            12 sesi privat x 60 menit
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-400" />
                            Sertifikat akhir kursus
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-400" />
                            Jadwal fleksibel & personal
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-400" />
                            Materi persiapan TOEFL lengkap
                        </li>
                    </ul>
                </div>

                {/* Right: Checkout Panel */}
                <div className="bg-background/60 border-l border-white/10 px-8 py-10 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-sm text-white/60 mb-1">Total Pembayaran</h2>
                            <div className="text-3xl font-bold text-white">Rp 750.000</div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="w-full mt-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 transition text-white py-3 rounded-xl text-sm font-semibold shadow-lg"
                        >
                            Bayar Sekarang
                        </button>

                        <p className="text-xs mt-3 text-white/60 flex items-center justify-center gap-1">
                            <Lock className="w-4 h-4" />
                            Transaksi aman melalui Midtrans
                        </p>
                    </div>

                    <div className="mt-10 text-xs text-white/40">
                        Dengan melanjutkan, Anda menyetujui <a href="#" className="underline">Syarat & Ketentuan</a> Correctly.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
