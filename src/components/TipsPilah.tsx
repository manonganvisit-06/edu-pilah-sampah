"use client";

import {
  Split,
  Droplets,
  PackageCheck,
  AlertTriangle,
} from "lucide-react";

export default function TipsPilahSection() {
  const tips = [
    {
      title: "Pisahkan Sesuai Jenisnya",
      desc: "Sebelum dibuang, pastikan sampah sudah dipisah menjadi organik, anorganik, B3, dan residu.",
      icon: Split,
    },
    {
      title: "Bilas Sampah Plastik",
      desc: "Cuci botol atau plastik bekas makanan/minuman agar tidak bau dan lebih mudah didaur ulang.",
      icon: Droplets,
    },
    {
      title: "Lipat atau Kecilkan Ukuran",
      desc: "Lipat kardus atau tekan botol agar tidak memakan banyak tempat di tempat sampah.",
      icon: PackageCheck,
    },
    {
      title: "Pisahkan Sampah Berbahaya",
      desc: "Jangan campur baterai, lampu, atau obat dengan sampah lain karena berbahaya.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section
      id="tips-pilah"
      className="bg-gray-50 dark:bg-slate-900 py-16 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Tips Sebelum Buang Sampah
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
          Lakukan langkah sederhana ini sebelum membuang sampah agar lebih rapi dan mudah dikelola.
        </p>

        {/* Timeline */}
        <div className="mt-10 relative border-l-2 border-green-200 dark:border-green-800">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div
                key={index}
                className="mb-10 ml-6 relative"
              >
                
                {/* Icon */}
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-green-600 rounded-full ring-4 ring-white dark:ring-slate-900">
                  <Icon className="w-4 h-4 text-white" />
                </span>

                {/* Content */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {tip.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {tip.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
