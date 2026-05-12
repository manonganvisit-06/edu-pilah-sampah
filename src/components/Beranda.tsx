"use client";

import {
  Recycle,
  Trash2,
  ShieldPlus,
  Leaf,
} from "lucide-react";

export default function BerandaSection() {
  const reasons = [
    {
      title: "Mempermudah Daur Ulang",
      desc: "Sampah yang sudah dipilah lebih mudah diolah kembali menjadi barang yang bermanfaat.",
      icon: Recycle,
    },
    {
      title: "Mengurangi Beban TPA",
      desc: "Jumlah sampah yang masuk ke tempat pembuangan akhir bisa berkurang secara signifikan.",
      icon: Trash2,
    },
    {
      title: "Mencegah Penyakit",
      desc: "Sampah yang tertata tidak menjadi sarang bakteri dan penyebab penyakit.",
      icon: ShieldPlus,
    },
    {
      title: "Lingkungan Lebih Bersih",
      desc: "Lingkungan jadi lebih rapi, nyaman, dan sehat untuk ditinggali.",
      icon: Leaf,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-16 transition-colors">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-50">
          Kenapa Harus Pilah Sampah?
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Dengan memilah sampah, kita membantu lingkungan dan kesehatan bersama.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center">
                  <Icon className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-50">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}