"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="beranda" className="bg-gray-50 dark:bg-slate-900 pt-24 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* LEFT: TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 leading-tight">
            Ayo Pilah Sampah <br />
            <span className="text-green-600">dari Rumah</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Panduan sederhana untuk warga Dusun Sidoharjo agar lingkungan lebih bersih dan sehat.
          </p>

          <div className="mt-6">
            <Link
              href="/kalkulator"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Coba Kalkulator Sampah
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1">
          <Image
            src="/images/dustbin-hero.png"
            alt="Ilustrasi memilah sampah"
            width={500}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}