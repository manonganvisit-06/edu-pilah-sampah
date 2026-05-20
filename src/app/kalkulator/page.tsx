import Navbar from "@/components/Navbar";
import Kalkulator from "@/components/Kalkulator";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator",
  description: "Kalkulator hitung harga sampah per kilo",
};

export default function Calculator() {
  return (
    <>
        <Navbar />
        <Kalkulator />
        <Footer />
    </>
  );
}