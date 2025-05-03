import { type ReactNode } from "react";
import Specialty from "@/specialty/components/Specialty";
import Introduction from "@/introduction/components/Introduction";
import Education from "@/education/components/Education";
import Rating from "@/rating/components/Rating";
import Contact from "@/contact/components/Contact";
import Map from "@/map/components/Map";

export default function Home(): ReactNode {
  return (
    <div className="bg-light-surface flex flex-col gap-4">
      <Introduction />
      <Specialty />
      <Education />
      <Rating />
      <Contact />
      <Map />
    </div>
  );
}
