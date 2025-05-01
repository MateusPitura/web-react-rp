import type { ReactNode } from "react";
import SectionContainer from "../../global/components/SectionContainer";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sections } from "../../global/constants/sections";

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
          <Card
            title="Heraclio Barbosa Jr"
            date="6 de abril de 2025"
            description="Me senti muito bem na consulta e adorei as explicações detalhadas"
          />
          <Card
            title="T.P"
            date="9 de abril de 2025"
            description="Atendimento foi ótimo e pontual, educado e atencioso"
          />
          <Card
            title="W.R"
            date="3 de abril de 2025"
            description="Suas orientações me ajudaram a colocar a vida em ordem."
          />
          <Card
            title="William"
            date="26 de março de 2025"
            description="Estou satisfeito com o atendimento. Acredito muito na recuperação"
          />
          <Card
            title="junior Stival"
            date="20 de março de 2025"
            description="Sem palavras para descrever o atendimento. Muito obrigado pela atenção Dr"
          />
        </Slider>
      </div>
    </SectionContainer>
  );
}
