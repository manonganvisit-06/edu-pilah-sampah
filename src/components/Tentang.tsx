"use client";

const latlong = {
  lat: -7.653412,
  long: 110.35202,
};

export default function TentangSection() {
  const mapsUrl = `https://www.google.com/maps?q=${latlong.lat},${latlong.long}`;

  return (
    <section
      id="tentang"
      className="bg-gray-50 dark:bg-slate-900 py-16 transition-colors"
    >
      <div className="max-w-screen-xl mx-auto px-4 mb-5">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Tentang & Lokasi
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Informasi lokasi dan kontak Dusun
            Sidoharjo.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          
          {/* LEFT: INFO */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Dusun Sidoharjo
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Dusun Sidoharjo terletak di
              Kelurahan Bangun Kerto,
              Kecamatan Turi, Kabupaten
              Sleman. Melalui program ini,
              kami mengajak masyarakat untuk
              lebih peduli terhadap
              pengelolaan sampah demi
              lingkungan yang bersih dan
              sehat.
            </p>

            {/* Detail */}
            <div className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium text-gray-800 dark:text-white">
                  Alamat:
                </span>{" "}
                Sidoharjo, Kendal, Bangun
                Kerto, Turi, Sleman
              </p>

              <p>
                <span className="font-medium text-gray-800 dark:text-white">
                  Kontak:
                </span>{" "}
                08xxxxxxxxxx
              </p>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="w-full h-[300px] md:h-[350px]">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              src={`https://www.google.com/maps?q=${latlong.lat},${latlong.long}&output=embed`}
              loading="lazy"
            ></iframe>

            {/* Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold text-center transition"
            >
              Buka di Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
