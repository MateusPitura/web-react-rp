import { useEffect, type ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProperties {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export default function Card({
  description,
  period,
  title,
  institution,
}: CardProperties): ReactNode {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-light-secondary p-4 rounded-md shadow-md text-light-on-secondary flex flex-col gap-2 max-w-72"
      data-aos="fade-up"
    >
      <span className="text-title-large">{title}</span>
      <div className="flex gap-2 justify-between items-center text-light-outline-variant">
        <span className="text-label-large font-bold">{institution}</span>
        <span className="text-label-large font-bold">{period}</span>
      </div>
      <span className="text-body-large">{description}</span>
    </div>
  );
}
