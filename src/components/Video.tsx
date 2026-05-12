"use client";

import videos from "@/data/videos.json";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="bg-white dark:bg-slate-900 py-16 transition-colors"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Video Edukasi Pilah Sampah
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Tonton video berikut untuk memahami cara memilah sampah dengan benar.
        </p>

        {/* Grid Video */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="text-left"
            >
              
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                />
              </div>

              <h3 className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
