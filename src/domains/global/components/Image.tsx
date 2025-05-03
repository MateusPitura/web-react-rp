import { useState, type ReactNode } from "react";
import classNames from "classnames";

interface ImageProperties {
  width: number;
  aspectRatio: string;
  src: string;
  className?: string;
}

export default function Image({
  aspectRatio,
  width,
  src,
  className,
}: ImageProperties): ReactNode {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative" style={{ width, aspectRatio }}>
      {!loaded && (
        <div
          className={classNames(
            "absolute inset-0 bg-light-outline animate-pulse rounded-lg",
            className
          )}
        />
      )}
      <img
        src={src}
        alt="Doctor photo"
        className={classNames(
          "rounded-lg shadow-md w-full h-full object-cover transition-opacity duration-500",
          className,
          {
            "opacity-0": !loaded,
            "opacity-100": loaded,
          }
        )}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
