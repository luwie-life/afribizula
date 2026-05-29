import Navbar from "../components/layout/Navbar";
import Hero from "../Sections/Hero";
import Vision from "../Sections/Vision";
import Solutions from "../Sections/Solutions";
import Marketplace from "../Sections/Marketplace";
import Pricing from "../Sections/Pricing";
import JoinEcosystem from "../Sections/JoinEcosystem";
import FAQ from "../Sections/Faq";
import Footer from "../Sections/Footer";
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