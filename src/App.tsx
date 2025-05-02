import { type ReactNode } from "react";
import Specialty from "@/specialty/components/Specialty";
import Introduction from "@/introduction/components/Introduction";
import TopBar from "@/global/components/TopBar";
import Education from "@/education/components/Education";
import Rating from "@/rating/components/Rating";
import Contact from "@/contact/components/Contact";
import Map from "@/map/components/Map";

export default function App(): ReactNode {
  return (
    <main className="bg-light-surface flex flex-col gap-4">
      <TopBar />
      <Introduction />
      <Specialty />
      <Education />
      <Rating />
      <Contact />
      <Map />
    </main>
  );
}
