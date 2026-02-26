import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Capabilities = dynamic(() => import("@/components/Capabilities"));
const Industries = dynamic(() => import("@/components/Industries"));
const BEMethod = dynamic(() => import("@/components/BEMethod"));
const DataSection = dynamic(() => import("@/components/DataSection"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const DesignSystemExample = dynamic(() => import("@/components/DesignSystemExample"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Industries />
        <BEMethod />
        <DataSection />
        {/* <Projects /> */}
        <CTA />
        <DesignSystemExample />
      </main>
      <Footer />
    </>
  );
}
