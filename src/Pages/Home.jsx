import Navbar from "../components/layout/Navbar";
import Hero from "../Sections/Hero";
import Vision from "../Sections/Vision";
import Solutions from "../sections/Solutions";
import Marketplace from "../sections/Marketplace";
import Pricing from "../sections/Pricing";
import JoinEcosystem from "../sections/JoinEcosystem";
import FAQ from "../sections/Faq";
import Footer from "../sections/Footer";
import SEO from "../components/seo/SEO";

const Home = () => {
  return (
    <main className="bg-white text-black overflow-hidden">
      <>
      <SEO />
      <Navbar />
      <Hero />
      <Vision id="vision"/>
      <Solutions id="infrastructure"/>
      <Marketplace id="marketplace"/>
      <Pricing id="pricing"/>
      <JoinEcosystem />
      <FAQ id="faq"/>
      <Footer />
      </>
    </main>
  );
};

export default Home;