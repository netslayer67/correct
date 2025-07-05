import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Lock, ArrowLeft, Wallet, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

/**
 * CheckoutPage – High‑End SaaS look & feel
 * - Transparansi, layering, blur
 * - Polished spacing & premium padding
 * - Smooth entrance animation (Framer Motion)
 * - Parallax subtle background tilt on mouse‑move
 * - Pilihan metode pembayaran: Cash / Online
 */

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { slot, mode } = location.state || {};

    // ─── Local State ───────────────────────────────────────────────────────
    const [paymentMethod, setPaymentMethod] = useState('online'); // 'online' | 'cash'

    // ─── Dummy Payment Flow ───────────────────────────────────────────────
    const handlePayment = () => {
        if (paymentMethod === 'online') {
            alert('Simulasi pembayaran online. Anda akan diarahkan ke Midtrans…');
            // navigate('/payment-success');
        } else {
            alert('Booking dikonfirmasi! Silakan membayar secara tunai kepada tutor pada sesi pertama.');
            // navigate('/booking-success');
        }
    };

    // ─── Derived Values ────────────────────────────────────────────────────
    const fallbackText = 'Online – Senin 09:00';
    const displaySlot = slot || fallbackText;
    const displayMode = mode || 'online';
    const formattedPrice = displayMode === 'online' ? 'Rp 750.000' : 'Rp 850.000';
    const packageLabel = displayMode === 'online' ? 'Paket Online Intensive' : 'Paket Offline Reguler';

    // ─── Animation Variants ────────────────────────────────────────────────
    const pageVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    // ─── Parallax Effect ──────────────────────────────────────────────────
    const handleMouseMove = (e) => {
        const { currentTarget: card } = e;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateX(${(-y / 40).toFixed(2)}deg) rotateY(${(x / 40).toFixed(2)}deg)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    // ───────────────────────────────────────────────────────────────────────
    return (
        <motion.section
            variants={pageVariants}
            initial="hidden"
            animate="show"
            className="min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-blue-950 text-white py-28 px-6 font-sans"
        >
            <div className="max-w-5xl mx-auto relative mt-6">
                {/* Back button */}
                <Button
                    onClick={() => navigate(-1)}
                    variant="ghost"
                    className="absolute -top-16 left-0 text-white hover:text-sky-400 hover:bg-transparent transition"
                >
                    <ArrowLeft className="mr-2 size-4" /> Kembali
                </Button>

                {/* Checkout Card */}
                <motion.div
                    variants={cardVariants}
                    // onMouseMove={handleMouseMove}
                    // onMouseLeave={handleMouseLeave}
                    className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-2xl bg-white/5 transition-transform duration-300"
                >
                    {/* ── Left: Package Details ─────────────────────────── */}
                    <div className="p-10 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-300 to-blue-300">
                            {packageLabel}
                        </h1>

                        <ul className="space-y-3 text-sm text-white/90">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-sky-400" /> Jadwal dipilih: <strong>{displaySlot}</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-sky-400" /> Belajar secara <strong>{displayMode.toUpperCase()}</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-sky-400" /> 8x sesi belajar fleksibel (60 menit)
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-sky-400" /> Materi & sertifikat eksklusif
                            </li>
                        </ul>

                        <p className="text-white/60 text-sm leading-relaxed pt-4">
                            Pembelajaran ini dirancang untuk hasil maksimal dengan pendampingan tutor berpengalaman, fleksibel dan bisa disesuaikan dengan kebutuhan Anda.
                        </p>
                    </div>

                    {/* ── Right: Payment Panel ──────────────────────────── */}
                    <div className="bg-background/50 backdrop-blur-xl border-l border-white/10 px-10 py-12 flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                            className="space-y-8"
                        >
                            {/* Total */}
                            <div>
                                <h2 className="text-sm text-white/60 mb-1">Total Pembayaran</h2>
                                <div className="text-3xl font-bold text-white tracking-tight">{formattedPrice}</div>
                            </div>

                            {/* Metode Pembayaran */}
                            <div className="space-y-3">
                                <h3 className="text-sm text-white/60">Metode Pembayaran</h3>
                                <div className="flex gap-4">
                                    {[
                                        { id: 'online', label: 'Online', icon: CreditCard },
                                        { id: 'cash', label: 'Cash', icon: Wallet }
                                    ].map((opt) => (
                                        <motion.button
                                            key={opt.id}
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => setPaymentMethod(opt.id)}
                                            className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-semibold backdrop-blur-md transition ${paymentMethod === opt.id
                                                ? 'bg-sky-600 text-white border-sky-500 shadow-lg'
                                                : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20'
                                                }`}
                                        >
                                            <opt.icon className="w-4 h-4" /> {opt.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handlePayment}
                                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:brightness-110 hover:shadow-xl transition text-white py-3 rounded-xl text-sm font-semibold shadow-lg"
                            >
                                {paymentMethod === 'online' ? 'Bayar Sekarang' : 'Konfirmasi Booking'}
                            </motion.button>

                            {paymentMethod === 'online' && (
                                <p className="text-xs mt-4 text-white/60 flex items-center justify-center gap-1">
                                    <Lock className="w-4 h-4" /> Transaksi aman melalui Midtrans
                                </p>
                            )}
                            {paymentMethod === 'cash' && (
                                <p className="text-xs mt-4 text-white/60 text-center">
                                    Anda memilih pembayaran <strong>CASH</strong>. Bayar langsung kepada tutor di sesi pertama.
                                </p>
                            )}
                        </motion.div>

                        {/* Terms */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-10 text-xs text-white/40 text-center"
                        >
                            Dengan melanjutkan, Anda menyetujui{' '}
                            <a href="#" className="underline hover:text-white">
                                Syarat & Ketentuan
                            </a>
                            .
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CheckoutPage;
