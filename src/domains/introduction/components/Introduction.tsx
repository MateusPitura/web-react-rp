import { type ReactNode } from "react";
import { sections } from "@/global/constants/sections";
import SectionContainer from "@/global/components/SectionContainer";
import Image from "@/global/components/Image";
import { introduction } from "@/global/constants/settings";

export default function Introduction(): ReactNode {
  return (
    <SectionContainer className="justify-center" id={sections.introduction.id}>
      <div className="max-w-2xl flex gap-4 flex-wrap justify-center md:flex-nowrap">
        <div className="flex justify-center relative">
          <div className="bg-light-primary h-2 w-16 rounded-md absolute left-[-10px] top-5 shadow-md z-10" />
          <Image width={288} aspectRatio="9/16" src={introduction.image} />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-light-on-surface text-display-large">
            <span className="text-light-primary">{introduction.degree} </span>
            {introduction.name}
          </h1>
          <p className="text-body-large text-light-on-surface">
            {introduction.description}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
