"use client";

import {
  Leaf,
  Recycle,
  AlertTriangle,
  Trash2,
} from "lucide-react";

export default function JenisSampahSection() {
  const items = [
    {
      title: "Organik",
      desc: "Sampah yang mudah terurai secara alami.",
      examples: [
        "Sisa makanan",
        "Daun",
        "Kulit buah",
      ],
      icon: Leaf,
      bg: "bg-green-50 dark:bg-green-950/30 border-green-500 text-green-700 dark:text-green-300",
    },
    {
      title: "Anorganik",
      desc: "Sampah yang sulit terurai, tapi bisa didaur ulang.",
      examples: [
        "Plastik",
        "Botol",
        "Kaleng",
      ],
      icon: Recycle,
      bg: "bg-blue-50 dark:bg-blue-950/30 border-blue-500 text-blue-700 dark:text-blue-300",
    },
    {
      title: "B3",
      desc: "Sampah berbahaya dan beracun yang perlu penanganan khusus.",
      examples: [
        "Baterai",
        "Lampu",
        "Obat-obatan",
      ],
      icon: AlertTriangle,
      bg: "bg-red-50 dark:bg-red-950/30 border-red-500 text-red-700 dark:text-red-300",
    },
    {
      title: "Residu",
      desc: "Sampah yang tidak bisa didaur ulang lagi.",
      examples: [
        "Popok",
        "Tisu kotor",
        "Puntung rokok",
      ],
      icon: Trash2,
      bg: "bg-gray-50 dark:bg-slate-800 border-gray-500 dark:border-slate-600 text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section
      id="jenis-sampah"
      className="bg-gray-50 dark:bg-slate-900 py-16 transition-colors"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Jenis-Jenis Sampah
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Kenali jenis sampah agar tidak salah dalam memilah.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`p-6 rounded-xl border-t-4 ${item.bg} text-left hover:shadow-md transition`}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <Icon className="w-10 h-10" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm">
                  {item.desc}
                </p>

                {/* Examples */}
                <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                  {item.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
