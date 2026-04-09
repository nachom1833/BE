import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Capabilities = dynamic(() => import("@/components/Capabilities"));
const Industries = dynamic(() => import("@/components/Industries"));
const Method = dynamic(() => import("@/components/Method"));
const DataSection = dynamic(() => import("@/components/DataSection"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Industries />
        <Method />
        <DataSection />
        {/* <Projects /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
