import type { ReactNode } from "react";
import SectionContainer from "@/global/components/SectionContainer";
import Card from "./Card";
import Slider from "react-slick";
import { sections } from "@/global/constants/sections";
import "slick-carousel/slick/slick.css";
import { rating } from "@/global/constants/settings";

const settings = {
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToScroll: 1,
  useTransform: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
};

export default function Rating(): ReactNode {
  return (
    <SectionContainer
      title="Avaliações"
      className="bg-light-tertiary !px-0"
      titleClassName="text-light-on-tertiary"
      id={sections.rating.id}
    >
      <div className="max-w-full h-56 overflow-hidden">
        <Slider {...settings}>
          {rating.map((item) => (
            <Card
              key={item.name}
              title={item.name}
              date={item.date}
              description={item.description}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </SectionContainer>
  );
}
