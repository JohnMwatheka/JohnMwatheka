// app/page.tsx

import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}