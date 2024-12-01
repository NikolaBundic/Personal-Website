import Navbar from "@/components/component/navbar";
import BusinessCard from "@/components/component/business-card-layout";
import TechPills from "@/components/component/tech-pills";
import ImageCards from "@/components/component/image-cards";

export default function Home() {
  return (
    <main>
      <Navbar />
      <br id="section1"/>
      <br />
      <br />
      <BusinessCard />
      <br id="section2"/>
      <br />
      <TechPills />
      <br id="section3"/>
      <br />
      <ImageCards />
    </main>
  );
}
