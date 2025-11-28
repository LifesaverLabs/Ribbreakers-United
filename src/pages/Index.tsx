import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import GoodSamaritan from "@/components/GoodSamaritan";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Statistics />
      <Mission />
      <GoodSamaritan />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
