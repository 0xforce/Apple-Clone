import {
  Navbar,
  Hero,
  Highlights,
  Model,
  Features,
  HowItWorks,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
