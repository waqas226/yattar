import Hero from "@/components/Hero";
import ContentGrid from "@/components/ContentGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TabsBar from "@/components/hero/TabsBar";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="container mx-auto py-6 bg-white">
      <div className="grid lg:grid-cols-[56px_1fr]">
        <Sidebar />
        <div>
          <Header />
          <Hero imageSrc="/images/hero-cover.jpg" />
          {/* Tabs + Grid unified card */}
          <div className="relative z-30 -mt-14 mb-8 px-2">
            <div className="mx-auto w-full max-w-[960px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <TabsBar />
              <ContentGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
