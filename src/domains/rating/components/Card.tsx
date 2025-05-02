import type { ReactNode } from "react";
import Icon from "@/global/components/Icon";

interface CardProperties {
  description: string;
  title: string;
  date: string;
  image: string;
}

export default function Card({
  date,
  description,
  title,
  image,
}: CardProperties): ReactNode {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-light-surface p-4 shadow-md rounded-md text-light-on-surface flex flex-col gap-2 m-2 min-w-72 max-w-72 min-h-48 max-h-48">
        <div className="flex gap-2 items-center">
          <img src={image} width={32} height={32} className="rounded-full" />
          <p className="text-title-large">{title}</p>
        </div>
        <div className="flex gap-1 justify-between items-center">
          <div className="flex gap-1 text-light-primary text-label-large">
            <Icon iconName="Star" />
            <Icon iconName="Star" />
            <Icon iconName="Star" />
            <Icon iconName="Star" />
            <Icon iconName="Star" />
          </div>
          <p className="text-label-large">{date}</p>
        </div>
        <p className="text-body-large">{description}</p>
      </div>
    </div>
  );
}
