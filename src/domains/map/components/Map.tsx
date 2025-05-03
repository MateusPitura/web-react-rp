import SectionContainer from "@/global/components/SectionContainer";
import { sections } from "@/global/constants/sections";
import classNames from "classnames";
import { useState, type ReactNode } from "react";

export default function Map(): ReactNode {
  const [loaded, setLoaded] = useState(false);

  return (
    <SectionContainer
      id={sections.map.id}
      className="bg-light-primary-container"
      title={sections.map.text}
      titleClassName="!text-light-on-primary-container"
    >
      <div className="flex flex-col gap-4">
        <div className="text-center text-light-on-primary-container">
          <p className="text-body-large">Rua Padre Ildefonso, 475. Sala 21</p>
          <p className="text-label-large">Centro, Ponta Grossa</p>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-72 h-60 md:w-2xl md:h-96 relative">
          {!loaded && (
            <div
              className={classNames(
                "absolute inset-0 bg-light-outline animate-pulse"
              )}
            />
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0606562798393!2d-50.16029462372654!3d-25.09980799580157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a42f8c57a3b%3A0x282c129b2623b785!2sR.%20Padre%20Ildefonso%2C%20475%20-%20Centro%2C%20Ponta%20Grossa%20-%20PR%2C%2084010-070!5e0!3m2!1sen!2sbr!4v1746149841058!5m2!1sen!2sbr"
            className={classNames(
              "h-full w-full transition-opacity duration-50",
              {
                "opacity-0": !loaded,
                "opacity-100": loaded,
              }
            )}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
