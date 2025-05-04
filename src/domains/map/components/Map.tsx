import SectionContainer from "@/global/components/SectionContainer";
import { sections } from "@/global/constants/sections";
import { map } from "@/global/constants/settings";
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
          <p className="text-body-large">{map.address}</p>
          <p className="text-label-large">{map.description}</p>
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
            src={map.link}
            title="Google Maps"
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
