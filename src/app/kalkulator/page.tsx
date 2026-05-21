import Navbar from "@/components/Navbar";
import Kalkulator from "@/components/Kalkulator";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator",
  description: "Kalkulator hitung harga sampah per kilo",
};

export default async function Calculator() {
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return (
    <>
        <Navbar />
        <Kalkulator />
        <Footer />
    </>
  );
}