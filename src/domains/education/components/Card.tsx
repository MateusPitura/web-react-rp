import type { ReactNode } from "react";

interface CardProperties {
  title: string;
  university: string;
  period: string;
  description: string;
}

export default function Card({
  description,
  period,
  title,
  university,
}: CardProperties): ReactNode {
  return (
    <div className="bg-light-secondary p-4 rounded-md shadow-md text-light-on-secondary flex flex-col gap-2 max-w-72">
      <span className="text-title-large">{title}</span>
      <div className="flex gap-2 justify-between items-center text-light-on-secondary">
        <span className="text-label-large">{university}</span>
        <span className="text-label-large">{period}</span>
      </div>
      <span className="text-body-large">{description}</span>
    </div>
  );
}
