import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Management from "@/components/Management";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ApplyForm from "@/components/ApplyForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Management />
        <WhyChooseUs />
        <Academics />
        <Facilities />
        <Gallery />
        <ApplyForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
