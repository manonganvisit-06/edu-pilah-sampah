import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Beranda from "@/components/Beranda";
import JenisSampah from "@/components/JenisSampah";
import TipsPilah from "@/components/TipsPilah";
import Video from "@/components/Video";
import Tentang from "@/components/Tentang";
import Footer from "@/components/Footer";
import FloatButton from "@/components/FloatButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Beranda />
      <JenisSampah />
      <TipsPilah />
      <Video />
      <Tentang />
      <Footer />
      <FloatButton />
    </>
  );
}